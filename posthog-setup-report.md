<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Recurrly Expo app. Here's a summary of what was done:

- **`src/config/posthog.ts`** (new): PostHog client singleton, configured via `expo-constants` extras. Reads `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from the environment — never hardcoded.
- **`app.config.js`** (new): Extends `app.json` to inject PostHog env vars into Expo's `extra` block so they're accessible at runtime via `Constants.expoConfig?.extra`.
- **`.env`**: Added `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` (covered by `.gitignore`).
- **`app/_layout.tsx`**: Added `PostHogProvider` wrapping the app, with autocapture (touch events) enabled and manual screen tracking via `posthog.screen()` on pathname changes.
- **`app/(auth)/signIn.tsx`**: Added `posthog.identify()` + `posthog.capture('user_signed_in')` on successful sign-in (password, email verification, and MFA paths). Added `posthog.capture('user_sign_in_failed')` on error.
- **`app/(auth)/signUp.tsx`**: Added `posthog.identify()` + `posthog.capture('user_signed_up')` on successful email verification. Added `posthog.capture('user_sign_up_failed')` on error.
- **`app/(tabs)/settings.tsx`**: Added `posthog.capture('user_signed_out')` and `posthog.reset()` on sign-out.
- **`app/(tabs)/index.tsx`**: Added `posthog.capture('subscription_expanded')` when a subscription card is tapped open, with `subscription_name`, `billing`, and `category` properties.
- **`app/subscriptions/[id].tsx`**: Added `posthog.capture('subscription_detail_viewed')` with `subscription_id` on mount.

## Events instrumented

| Event | Description | File |
|---|---|---|
| `user_signed_in` | User successfully signed in (password / email verification / MFA) | `app/(auth)/signIn.tsx` |
| `user_sign_in_failed` | Sign-in attempt failed | `app/(auth)/signIn.tsx` |
| `user_signed_up` | User completed email verification and created account | `app/(auth)/signUp.tsx` |
| `user_sign_up_failed` | Sign-up attempt failed | `app/(auth)/signUp.tsx` |
| `user_signed_out` | User signed out successfully | `app/(tabs)/settings.tsx` |
| `subscription_expanded` | User expanded a subscription card on the home screen | `app/(tabs)/index.tsx` |
| `subscription_detail_viewed` | User opened a subscription detail screen | `app/subscriptions/[id].tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard – Analytics basics**: https://us.posthog.com/project/399548/dashboard/1555522
- **Sign-up → Sign-in Conversion Funnel**: https://us.posthog.com/project/399548/insights/rzQJY05E
- **Daily Sign-ins & Sign-ups**: https://us.posthog.com/project/399548/insights/nYB3BpQO
- **Sign-in Failure Rate**: https://us.posthog.com/project/399548/insights/glE2kNzM
- **Churn Signal – Sign-outs Over Time**: https://us.posthog.com/project/399548/insights/imCaheWY
- **Subscription Engagement**: https://us.posthog.com/project/399548/insights/7taxkvEK

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
