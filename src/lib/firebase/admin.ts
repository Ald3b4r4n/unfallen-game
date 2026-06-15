import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : undefined,
};

if (getApps().length === 0 && firebaseAdminConfig.projectId && firebaseAdminConfig.clientEmail) {
  try {
    initializeApp({
      credential: cert(firebaseAdminConfig),
    });
  } catch (error) {
    console.error("Erro ao inicializar Firebase Admin SDK:", error);
  }
}

export async function verifyIdToken(token: string) {
  const decodedToken = await getAuth().verifyIdToken(token);
  return {
    uid: decodedToken.uid,
    email: decodedToken.email || "",
  };
}
