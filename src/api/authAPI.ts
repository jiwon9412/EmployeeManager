import firebaseApp from "./firebase";
import {
  AuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  signOut,
} from "firebase/auth";

type pType = string | null;

export async function login(providerName: pType): Promise<UserCredential> {
  const auth = getAuth(firebaseApp);
  const provider = getProvider(providerName);
  return signInWithPopup(auth, provider);
}

export async function logout(): Promise<void> {
  const auth = getAuth(firebaseApp);
  return signOut(auth).then(() => {
    sessionStorage.removeItem("uid");
    console.log(sessionStorage.getItem("uid"));
  });
}

function getProvider(providerName: pType): AuthProvider {
  switch (providerName) {
    case "Google":
      return new GoogleAuthProvider();
    case "Github":
      return new GithubAuthProvider();
    default:
      throw new Error(`not supported Provider : ${providerName}`);
  }
}
