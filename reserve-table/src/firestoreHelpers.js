import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function submitFirestoreReservation(values) {
  try {
    await addDoc(collection(db, "bookings"), values);
    return true;
  } catch (error) {
    console.error("Error adding reservation: ", error);
    return false;
  }
}