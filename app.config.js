/* app.config.js */

// default imports
import "dotenv/config";

// firebase configuration data
export default ({ config }) => ({
    ...config,
    expoApp: {
        firebaseApiKey: process.env.EXPO_APP_FIREBASE_API_KEY,
        firebaseAuthDomain: process.env.EXPO_APP_FIREBASE_AUTH_DOMAIN,
        firebaseProjectId: process.env.EXPO_APP_FIREBASE_PROJECT_ID,
        firebaseStorageBucket: process.env.EXPO_APP_FIREBASE_STORAGE_BUCKET,
        firebaseMessagingSenderId: process.env.EXPO_APP_FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.EXPO_APP_FIREBASE_APP_ID,
        firebaseMeasurementId: process.env.EXPO_APP_FIREBASE_MEASUREMENT_ID,
    }
});