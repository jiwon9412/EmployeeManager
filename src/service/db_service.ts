import firebaseApp from "./firebase";
import { getDatabase } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);
export default database;
