import { IEmployee } from "./../components/blocks/addModal/addModal";
import firebaseApp from "./firebase";
import { child, get, getDatabase, ref, set } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

export function writeEmployeeData(
  userId: string,
  employeeId: string,
  info: IEmployee
) {
  const { name, photo, phone, rank, department } = info;

  set(ref(database, `${userId}/employee/${employeeId}`), {
    name,
    photo,
    phone,
    rank,
    employeeId,
    department,
  });
}

export async function getEmployeeData(userId: string | null) {
  const dbRef = ref(database);
  return get(child(dbRef, `${userId}/employee`)).then((snapshop) => {
    if (snapshop.exists()) {
      //console.log(Object.values(snapshop.val()));
      return Object.values(snapshop.val());
    } else {
      return [];
    }
  });
}
