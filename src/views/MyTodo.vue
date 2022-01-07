<template>
    <div class="div-box">
        <h5>To Do List</h5>
        <el-input v-model="inputValue" placeholder="輸入一項待辦事項" v-on:keyup.enter="addTodo()" />
        <el-divider></el-divider>
        <ul>
            <li v-for="(todo, key, index) in todos" v-bind:key="index">
                <span v-if="!todo.isEdit">{{todo.text}}</span>
                <el-input v-model="todo.text" v-if="todo.isEdit" v-on:keyup.enter="updateTodo($event, todo)"/>
                <button type="button" v-if="!todo.isEdit" v-on:click="editTodo(todo)">
                    <i class="fas fa-edit"></i>
                </button>
                <button type="button" v-if="!todo.isEdit" v-bind:id="index" v-on:click="removeTodo(todo, index)">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </li>
        </ul>
        <el-divider></el-divider>
        <div v-if="todos.length !=0">
            Total : {{todos.length}} todo
            <el-button v-on:click="clearAll" type="danger">
                <i class="fas fa-trash-alt"></i>
            </el-button>
        </div>
        <div class="text-left">
            <p>Vue.js - 使用 v-model 指令取得 input 的內容，使用 v-on:keyup.ente 事件執行 function。</p>
            <p>簡易資料庫 - 使用 <el-link type="primary" href="https://firebase.google.com/" target="_blank" rel="nofollow">Firebase</el-link> 的 Realtime Database 來即時讀寫資料。</p>
        </div>
    </div>
</template>

<style lang="scss">
.div-box{
    margin: 0 auto;
    width: 300px;
    ul{
        padding: 0;
        li{
            margin-bottom: 5px;
            list-style: none;
            display: flex;
            span{
                margin-right: auto;
            }
            button{
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
        }
    }
    .text-left{
      text-align: left;
    }
}
</style>

<script>
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

signInWithEmailAndPassword(auth, "fanchi0917@gmail.com", "dby123").then((userCredential) => {
    const user = userCredential.user;
}).catch((error) => {
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
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        
        return {
            todos: [],
            inputValue: '',
            editValue:'',
        }
    },

    components: {
    },

    methods: {
        addTodo(){
            let inputValue = this.inputValue;
            if(!inputValue){
                return
            }
            const database = getDatabase(app);
            const newPostKey = push(child(ref(database), '/food')).key;
            let todoData = {
                "uuid": newPostKey,
                "text": inputValue,
                "isEdit": false
            }
            this.todos.push(todoData);
            set(ref(database, 'food/' + newPostKey), todoData);
            this.inputValue = '';
        },

        removeTodo(todo, index){
            let firebase_key = todo.uuid;
            this.todos.splice(index, 1);
            const database = getDatabase(app);
            remove(ref(database, 'food/' + firebase_key));
        },

        editTodo(todo){
            todo.isEdit = true;
        },

        clearAll(){
            this.todos = []; // 把儲存陣列的 todos 用空陣列賦值清空
            const database = getDatabase(app);
            set(ref(database, '/food'),"");
        },

        updateTodo($event, todo){
            if($event.target.value){
                todo.text = $event.target.value;
            }
            todo.isEdit = !todo.isEdit;
            let newPostKey = todo.uuid;
            let todoData = {
                "uuid": todo.uuid,
                "text": todo.text,
                "isEdit": todo.isEdit
            }
            const database = getDatabase(app);
            update(ref(database, 'food/' + newPostKey), todoData);   
        }
    },
}
</script>