import { createStore } from "vuex";
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB900FNxKYIwpFvlFcs4SqZro8bHPiqxvs",
  authDomain: "fantzulin-e590c.firebaseapp.com",
  projectId: "fantzulin-e590c",
  storageBucket: "fantzulin-e590c.appspot.com",
  messagingSenderId: "937701848678",
  appId: "1:937701848678:web:d30e705555247cb5b11fa7",
};
const app = initializeApp(firebaseConfig);

function writeUserData() {
  const db = getDatabase(app);

  get(ref(db, '/food')).then(function (snapshot) {
    console.log(snapshot.val());
  }).catch(function () {
    alert("伺服器發生錯誤，請稍後再試");
  });
}

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
writeUserData();