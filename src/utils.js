import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import db from "./firebase";

//Colors add - edit - delete
export const handleClick = async () => {
  const nome = prompt("add color title");
  const color = prompt("add color");
  const collectionRef = collection(db, "Colors");
  const payload = { nome, color, timestamp: serverTimestamp() };
  await addDoc(collectionRef, payload);
};
export const handleEdit = async (id) => {
  const nome = prompt("add color title");
  const color = prompt("add color");
  const docRef = doc(db, "Colors", id);
  const payload = { nome, color };
  updateDoc(docRef, payload);
};
export const handleDelete = async (id) => {
  const docRef = doc(db, "Colors", id);
  await deleteDoc(docRef);
};

//Projects add - edit - delete
export const ClickProgetti = async () => {
  const titolo = prompt("add project title");
  const colore = prompt("add project colore");
  const collectionRef = collection(db, "Progetti");
  const payload = { titolo, colore, timestamp: serverTimestamp() };
  await addDoc(collectionRef, payload);
};
export const EditProgetti = async (id) => {
  const titolo = prompt("add project title");
  const colore = prompt("add project colore");
  const docRef = doc(db, "Progetti", id);
  const payload = { titolo, colore };
  updateDoc(docRef, payload);
};
export const DeleteProgetti = async (id) => {
  const docRef = doc(db, "Progetti", id);
  await deleteDoc(docRef);
};

//Component add - edit - delete
export const ClickComponent = async () => {
  const titolo = prompt("add project title");
  const collectionRef = collection(db, "Component");
  const payload = { titolo, timestamp: serverTimestamp() };
  await addDoc(collectionRef, payload);
};
export const EditComponent = async (id) => {
  const titolo = prompt("add project title");
  const docRef = doc(db, "Component", id);
  const payload = { titolo };
  updateDoc(docRef, payload);
};
export const DeleteComponent = async (id) => {
  const docRef = doc(db, "Component", id);
  await deleteDoc(docRef);
};

//Layout add - edit - delete
export const ClickLayout = async () => {
  const titolo = prompt("add project title");
  const collectionRef = collection(db, "Layout");
  const payload = { titolo, timestamp: serverTimestamp() };
  await addDoc(collectionRef, payload);
};
export const EditLayout = async (id) => {
  const titolo = prompt("add project title");
  const docRef = doc(db, "Layout", id);
  const payload = { titolo };
  updateDoc(docRef, payload);
};
export const DeleteLayout = async (id) => {
  const docRef = doc(db, "Layout", id);
  await deleteDoc(docRef);
};
