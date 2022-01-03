<template>
    <div class="div-box">
        <h5>To Do List</h5>
        <el-input v-model="inputValue" placeholder="輸入一項待辦事項" v-on:keyup.enter="addTodo()" />
        <el-divider></el-divider>
        <ul>
            <li v-for="(item, index) in todos" v-bind:key="index">
                <span>{{item}}</span>
                <button type="button" v-on:click="removeTodo(index)">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </li>
        </ul>
        <el-divider></el-divider>
        <div v-if="todos.length !=0">
            Total : {{todos.length}} todo
            <el-button v-on:click="clearAll" type="danger">
                <el-icon><Delete /></el-icon>
            </el-button>
        </div>
        <div class="text-left">
            <p>Vue.js - 使用 v-model 指令取得 input 的內容，使用 v-on:keyup.ente 事件執行 function。</p>
            <p>Firebase - 使用 <el-link type="primary" href="https://firebase.google.com/" target="_blank" rel="nofollow">Firebase</el-link> 的 Realtime Database 來即時讀寫資料。</p>
        </div>
    </div>
</template>

<style lang="scss">
.div-box{
    margin: 0 auto;
    width: 300px;
    li{
        margin-bottom: 5px;
        list-style: none;
        span{
            margin-right: 5px;
        }
        button{
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
    .text-left{
      text-align: left;
    }
}
</style>

<script>
import { Delete } from "@element-plus/icons-vue";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, remove, update, push } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB900FNxKYIwpFvlFcs4SqZro8bHPiqxvs",
  authDomain: "fantzulin-e590c.firebaseapp.com",
  databaseURL: "https://fantzulin-e590c-default-rtdb.firebaseio.com",
  projectId: "fantzulin-e590c",
  storageBucket: "fantzulin-e590c.appspot.com",
  messagingSenderId: "937701848678",
  appId: "1:937701848678:web:d30e705555247cb5b11fa7",
  measurementId: "G-C1JLS7P3PL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
signInWithEmailAndPassword(auth, "fanchi0917@gmail.com", "dontbirdyou123")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export default {
    data() {
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, "/food")).then((snapshot) => {
            if (snapshot.exists()) {
                for(var key in snapshot.val()) {
                    this.todos.push(snapshot.val()[key]);
                }
                let firebase_key = Object.keys(snapshot.val());
                this.todokeys = firebase_key;
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        
        return {
            todos: [],
            todokeys: [],
            inputValue: '',
        }
    },

    components: {
        Delete,
    },

    methods: {
        addTodo(){
            let inputValue = this.inputValue;
            this.todos.push(inputValue);
            const database = getDatabase(app);
            const newPostKey = push(child(ref(database), '/food')).key;
            this.todokeys.push(newPostKey);
            set(ref(database, 'food/' + newPostKey), inputValue);
            this.inputValue = '';
        },

        removeTodo(index){
            let firebase_key = this.todokeys[index];
            this.todos.splice(index, 1);
            this.todokeys.splice(index, 1);
            const database = getDatabase(app);
            remove(ref(database, 'food/' + firebase_key));
        },

        clearAll(){
            this.todos = []; // 把儲存陣列的 todos 用空陣列賦值清空
            const database = getDatabase(app);
            set(ref(database, '/food'),"");
        },

        updateTodo(){
            let food = "測試"
            this.todos.push(food3);
            const database = getDatabase(app);

            set(ref(database, '/food'), {
                '1': '測試1'
            });
        }
    },
}
</script>