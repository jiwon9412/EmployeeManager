import { IEmployee } from "./../components/blocks/addModal/addModal";
import firebaseApp from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

export function writeEmployeeData(userId: string, info: IEmployee) {
  set(ref(database, "employee/" + userId), {
    info,
  });
}
