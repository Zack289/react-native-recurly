# Recurly - Subscription Management App 💳

A modern, cross-platform mobile application built with **Expo** and **React Native** for managing recurring subscriptions. Track your spending, monitor upcoming renewals, and gain insights into your subscription habits all in one place.

<div align="center">

![Recurly](./assets/images/favicon.png)

**Built with Expo • React Native • TypeScript • Clerk Auth • PostHog Analytics**

</div>

## Overview

Recurly is your personal subscription manager. Keep track of all your recurring payments—whether it's streaming services, software licenses, or cloud storage—in one centralized platform. Get a complete overview of your monthly spending, receive timely renewal reminders, and analyze your subscription patterns.

### Key Features ✨

- **📊 Dashboard Overview**: See your total monthly spending, upcoming renewals, and subscription summary at a glance
- **💰 Subscription Management**: Add, view, and manage all your recurring subscriptions
- **🔔 Renewal Alerts**: Get notified about subscriptions renewing within the next 7 days
- **📈 Analytics & Insights**: Track spending trends and subscription patterns over time
- **🔐 Secure Authentication**: Sign in securely with Clerk authentication
- **📱 Cross-Platform**: Works seamlessly on iOS, Android, and Web
- **📊 Event Tracking**: Built-in analytics with PostHog to monitor user behavior
- **🎨 Modern UI**: Beautiful, responsive design with NativeWind styling

## Tech Stack 🛠️

| Technology                                          | Purpose                                            |
| --------------------------------------------------- | -------------------------------------------------- |
| **[Expo](https://expo.dev)**                        | Cross-platform mobile development framework        |
| **[React Native](https://reactnative.dev)**         | Native mobile app development                      |
| **[TypeScript](https://www.typescriptlang.org)**    | Type-safe JavaScript                               |
| **[Expo Router](https://expo.dev/router)**          | File-based routing (like Next.js for React Native) |
| **[Clerk](https://clerk.com)**                      | Authentication & user management                   |
| **[PostHog](https://posthog.com)**                  | Product analytics & feature flags                  |
| **[NativeWind](https://www.nativewind.dev)**        | Tailwind CSS for React Native                      |
| **[Zustand](https://github.com/pmndrs/zustand)**    | Lightweight state management                       |
| **[React Navigation](https://reactnavigation.org)** | Tab-based navigation                               |
| **[Dayjs](https://day.js.org)**                     | Date manipulation & formatting                     |

## Project Structure 📁

```
├── app/                          # Main app source (Expo Router file-based routing)
│   ├── _layout.tsx              # Root layout with auth & analytics setup
│   ├── onboarding.tsx           # Onboarding screen
│   ├── (auth)/                  # Auth screens (public routes)
│   │   ├── signIn.tsx
│   │   └── signUp.tsx
│   ├── (tabs)/                  # Main app tabs
│   │   ├── index.tsx            # Home - dashboard & overview
│   │   ├── subscriptions.tsx    # Subscriptions list
│   │   ├── insights.tsx         # Analytics & spending trends
│   │   └── settings.tsx         # Settings & user profile
│   └── subscriptions/           # Dynamic routes
│       └── [id].tsx             # Subscription detail screen
├── components/                  # Reusable React components
│   ├── CreateSubscriptionModal.tsx
│   ├── ListHeading.tsx
│   ├── SubscriptionCard.tsx
│   └── UpcomingSubscriptionCard.tsx
├── constants/                   # App constants & data
│   ├── data.ts                  # Sample data & configuration
│   ├── icons.ts                 # Icon definitions
│   ├── images.ts                # Image assets
│   └── theme.ts                 # Theme configuration
├── lib/                         # Utilities & business logic
│   ├── subscriptionStore.ts     # Zustand state management
│   └── utils.ts                 # Helper functions
├── src/
│   └── config/
│       └── posthog.ts           # PostHog analytics setup
├── assets/                      # Static assets
│   ├── fonts/                   # Custom fonts
│   ├── icons/                   # Icon assets
│   └── images/                  # Image assets
└── app.json                     # Expo app configuration
```

## Getting Started 🚀

### Prerequisites

- Node.js 16+ & npm/yarn
- Expo CLI (`npm install -g expo-cli`)
- Clerk account ([clerk.com](https://clerk.com)) for authentication keys
- PostHog account ([posthog.com](https://posthog.com)) for analytics (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd native
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   POSTHOG_PROJECT_TOKEN=your_posthog_token
   POSTHOG_HOST=https://us.posthog.com
   ```

4. **Start the development server**

   ```bash
   npx expo start
   ```

5. **Open on your device**

   In the Expo CLI output, press:
   - `i` for iOS simulator
   - `a` for Android emulator
   - `w` for web browser
   - `j` to open debugger
   - `r` to reload

## Available Scripts 📝

### Development

```bash
# Start development server
expo start

# Run on iOS simulator
expo start --ios

# Run on Android emulator
expo start --android

# Run on web browser
expo start --web
```

### Code Quality & Tools

```bash
# Run ESLint for code quality
expo lint

# Reset project to fresh state
node ./scripts/reset-project.js
```

## App Screens 📱

### Home Tab

- **Dashboard Overview**: Total monthly spending and upcoming renewal summary
- **Upcoming Subscriptions**: Quick view of subscriptions renewing within 7 days
- **All Subscriptions**: Full list of managed subscriptions with quick details
- **Create Subscription**: Modal to add new subscriptions

### Subscriptions Tab

- **Detailed List**: View all subscriptions with full information
- **Subscription Details**: Tap to view complete subscription information
- **Manage**: Edit or delete subscriptions

### Insights Tab

- **Analytics Dashboard**: Visualize spending patterns and trends
- **Subscription Analysis**: Track subscription growth and categories
- **Spending Reports**: Monthly/yearly spending breakdowns

### Settings Tab

- **User Profile**: View and manage your account information
- **Account Settings**: Preferences and app configuration
- **Sign Out**: Securely sign out of your account

## Analytics Integration 📊

The app includes comprehensive PostHog analytics tracking:

| Event                        | Description                        | Triggered            |
| ---------------------------- | ---------------------------------- | -------------------- |
| `user_signed_in`             | Successful sign-in                 | Auth completion      |
| `user_signed_up`             | New account created                | Email verification   |
| `user_signed_out`            | User logged out                    | Settings screen      |
| `subscription_expanded`      | Subscription details viewed        | Home tab interaction |
| `subscription_created`       | New subscription added             | Modal submission     |
| `subscription_detail_viewed` | Subscription details screen opened | Navigation           |

**PostHog Insights**: [View Analytics Dashboard](https://us.posthog.com/project/399548)

## Authentication 🔐

Authentication is powered by **Clerk**, providing:

- ✅ Email/password authentication
- ✅ Email verification
- ✅ Multi-factor authentication (MFA) support
- ✅ Secure token management
- ✅ One-click sign-out
- ✅ User session management

Sign-in and sign-up flows include comprehensive error handling and PostHog event tracking.

## State Management 🔄

The app uses **Zustand** for lightweight, efficient state management:

- **Subscription Store**: Central state for all subscriptions
- **User Context**: Managed via Clerk
- **UI State**: Local component state with React hooks

## Styling 🎨

The app uses **NativeWind** - Tailwind CSS for React Native:

- Responsive design
- Dark mode support (automatic)
- Custom theme configuration
- Utility-first CSS approach
- Global styles in `global.css`

## Development Workflow 💻

### Code Quality

- **ESLint**: Run `expo lint` to check code quality
- **TypeScript**: Full type checking for better development experience
- **File-based Routing**: Automatic route generation based on file structure

### Hot Reload

- Changes are reflected instantly during development
- Fast refresh capability for rapid iteration

### Debugging

- Press `j` during `expo start` to open the React Native debugger
- Use Chrome DevTools for web debugging
- Clerk dashboard for auth debugging

## Building for Production 🏗️

### iOS

```bash
eas build --platform ios
```

### Android

```bash
eas build --platform android
```

### Web

```bash
expo export --platform web
```

_Note: Requires EAS CLI setup. See [Expo documentation](https://docs.expo.dev/build/introduction/) for details._

## Deployment 🚀

- **iOS**: Deployable via TestFlight or App Store
- **Android**: Deployable via Google Play Store
- **Web**: Deployable to any static hosting (Vercel, Netlify, etc.)

## Testing 🧪

The project is configured with:

- ESLint for code quality
- TypeScript for type safety
- React component structure for testability

## Contributing 🤝

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## Performance Optimization ⚡

- **Image Optimization**: Uses Expo Image with caching
- **List Optimization**: FlatList for efficient rendering
- **Code Splitting**: File-based routing enables automatic code splitting
- **State Management**: Zustand for minimal re-renders

## Troubleshooting 🐛

### App won't start

```bash
# Clear cache and reinstall
node ./scripts/reset-project.js
npm install
expo start
```

### Auth issues

- Verify Clerk publishable key in `.env`
- Check Clerk dashboard for API configuration
- Ensure secure token storage is set up

### Analytics not working

- Verify PostHog token in `.env`
- Check PostHog dashboard for project configuration
- Review network requests in browser dev tools

## Resources & Links 📚

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Clerk Documentation](https://clerk.com/docs)
- [PostHog Documentation](https://posthog.com/docs)
- [NativeWind Documentation](https://www.nativewind.dev/v5/overview)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Expo Router Guide](https://expo.dev/router)

## License 📄

This project is licensed under the MIT License - see LICENSE file for details.

## Support 💬

For issues and questions:

- 📧 Email: support@recurly.app
- 🐛 GitHub Issues: [Report a bug](../../issues)
- 💡 Discussions: [Start a discussion](../../discussions)

---

<div align="center">

**Made with ❤️ using Expo & React Native**

[Star us on GitHub](https://github.com) • [Follow on Twitter](https://twitter.com) • [Join our Discord](https://discord.gg)

</div>
