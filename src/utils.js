import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import db from "./firebase";

export const handleClick = async () => {
  const nome = prompt("add project title");
  const color = prompt("add project color");
  const collectionRef = collection(db, "Colors");
  const payload = { nome, color, timestamp: serverTimestamp() };
  await addDoc(collectionRef, payload);
};

export const handleEdit = async (id) => {
  const nome = prompt("add project title");
  const color = prompt("add project color");
  const docRef = doc(db, "Colors", id);
  const payload = { nome, color };
  updateDoc(docRef, payload);
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "Colors", id);
  await deleteDoc(docRef);
};
