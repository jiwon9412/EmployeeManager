import { IEmployee } from "./../components/blocks/addModal/addModal";
import firebaseApp from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

export function writeEmployeeData(
  userId: string,
  employeeId: string,
  info: IEmployee
) {
  const { name, photo, phone, rank } = info;
  console.log("123");

  set(ref(database, `/${userId}/employee`), {
    name,
    photo,
    phone,
    rank,
    employeeId,
  });
}
