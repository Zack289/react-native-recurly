// app.config.js – extends app.json with runtime extras read from .env
// PostHog keys are injected via process.env (loaded by Expo CLI from .env)
// and accessed in app code via expo-constants: Constants.expoConfig?.extra
const baseConfig = require('./app.json')

module.exports = {
  expo: {
    ...baseConfig.expo,
    extra: {
      posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
      posthogHost: process.env.POSTHOG_HOST,
    },
  },
}
