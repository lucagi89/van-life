// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where}
from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDKibEmqowVKQ1wKXVpbiicJFsjieFmdiU",
  authDomain: "vanlife-e84a8.firebaseapp.com",
  projectId: "vanlife-e84a8",
  storageBucket: "vanlife-e84a8.appspot.com",
  messagingSenderId: "306167130591",
  appId: "1:306167130591:web:a83d903f056746e9a2bc6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Get a list of vans from the firebase database
const vansCollectionRef = collection(db, "vans")
const usersCollectionRef = collection(db, "users")



export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)
  if (snapshot.empty) {
      throw new Error("No vans found")
  }
  const vans = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  return vans
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const snapshot = await getDoc(docRef)
  if (!snapshot.exists()) {
      throw new Error("No such van exists")
  } else {
      return { ...snapshot.data(), id: snapshot.id }
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "1"))
  const snapshot = await getDocs(q)
  const vans = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  return vans
}

async function getUsers() {
  const snapshot = await getDocs(usersCollectionRef)
  if (snapshot.empty) {
      throw new Error("No vans found")
  }
  const users = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  return users
}

export async function loginUser(creds) {
  console.log(getUsers())
  const users = await getUsers()

  const user = users.find(user => user.email === creds.email && user.password === creds.password)

  if (!user) {
      throw new Error("Invalid credentials")
  }
}
