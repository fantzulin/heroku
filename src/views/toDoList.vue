<template>
    <div class="div-box">
        <h5>To Do List</h5>
        <el-input v-model="inputValue" placeholder="輸入一項待辦事項" v-on:keyup.enter="addTodo()" />
        <el-divider></el-divider>
        <ul>
            <li v-for="(item, index) in todos" :key="item">
                <span>{{item}}</span>
                <el-button v-on:click="removeTodo(index)">
                    <i class="fas fa-trash-alt"></i>
                </el-button>
            </li>
        </ul>
        <el-divider></el-divider>
        <div v-if="todos.length !=0">
            Total : {{todos.length}} todo
            <el-button v-on:click="clearAll" type="danger">
                <el-icon><Delete /></el-icon>
            </el-button>
        </div>
        <el-button v-on:click="writeUserData()">取得資料庫資料</el-button>
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
    }
}
</style>

<script>
import { Delete } from "@element-plus/icons-vue";
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
  measurementId: "G-C1JLS7P3PL"
};

const app = initializeApp(firebaseConfig);
export default {
    data() {
        return {
            todos: ['假資料'],
            inputValue: '',
        }
    },

    components: {
        Delete,
    },

    methods: {
        addTodo(){
            this.todos.push(this.inputValue);
            console.log(this.todos);
            this.inputValue = '';
        },

        removeTodo(index){
            this.todos.splice(index, 1); // 使用陣列方法splice(指定的index開始，刪除一筆)，依照抓到的 index 刪除
        },

        clearAll(){
            this.todos = []; // 把儲存陣列的 todos 用空陣列賦值清空
        },

        writeUserData(){
            let firebase_data = "";
            const dbRef = ref(getDatabase(app));
            get(child(dbRef, "/food")).then((snapshot) => {
                if (snapshot.exists()) {
                    firebase_data = snapshot.val()[1].name;
                    this.todos.push(firebase_data);
                    console.log("firebase_data", firebase_data);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    },
}
</script>