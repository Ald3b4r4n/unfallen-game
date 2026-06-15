import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Evita falha do Firebase Auth em compilação estática server-side (Next.js prerender)
const auth: Auth = (typeof window !== "undefined" && firebaseConfig.apiKey && firebaseConfig.apiKey !== "fictional-api-key-here")
  ? getAuth(app)
  : (null as unknown as Auth);

export { app, auth };
