import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBBQ0dT2vVevclSTtkgZ99mPOG-IZcAcsQ",
  authDomain: "crewl-ac6d9.firebaseapp.com",
  databaseURL: "https://crewl-ac6d9-default-rtdb.firebaseio.com",
  projectId: "crewl-ac6d9",
  storageBucket: "crewl-ac6d9.appspot.com",
  messagingSenderId: "913222101002",
  appId: "1:913222101002:web:0711bdece0642adfa1d7f3",
  measurementId: "G-KJHPZR4E2W",
};

const app = initializeApp(firebaseConfig);

export function writeUserData(userId, name, city, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    name: name,
    city: "İzmir",
    email : email
  });
}