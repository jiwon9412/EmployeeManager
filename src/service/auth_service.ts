import firebaseApp from "./firebase";
import {
  AuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";

type pType = string | null;

class AuthService {
  login(providerName: pType): Promise<UserCredential> {
    const auth = getAuth(firebaseApp);
    const provider = this.getProvider(providerName);
    return signInWithPopup(auth, provider);
  }

  getProvider(providerName: pType): AuthProvider {
    switch (providerName) {
      case "Google":
        return new GoogleAuthProvider();
      case "Github":
        return new GithubAuthProvider();
      default:
        throw new Error(`not supported Provider : ${providerName}`);
    }
  }
}

export default AuthService;
