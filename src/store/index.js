import { createStore } from "vuex";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB900FNxKYIwpFvlFcs4SqZro8bHPiqxvs",
  authDomain: "fantzulin-e590c.firebaseapp.com",
  databaseURL: "https://fantzulin-e590c-default-rtdb.firebaseio.com",
  projectId: "fantzulin-e590c",
  storageBucket: "fantzulin-e590c.appspot.com",
  messagingSenderId: "937701848678",
  appId: "1:937701848678:web:d30e705555247cb5b11fa7",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);

function writeUserData() {
  const dbRef = ref(getDatabase(app));
  get(child(dbRef, '/food')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
writeUserData();