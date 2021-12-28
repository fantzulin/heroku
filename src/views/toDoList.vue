<template>
    <div class="div-box">
        <h5>To Do List</h5>
        <el-input v-model="inputValue" placeholder="輸入一項待辦事項" v-on:keyup.enter="addTodo()" />
        <el-divider></el-divider>
        <ul>
            <li v-for="(item, index) in todos" :key="item">
                <span>{{item}}</span>
                <el-button v-on:click="removeTodo(index)" :icon="Delete">
                    <el-icon><Delete /></el-icon>
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
export default {
    data() {
        return {
            todos: ['學習', '睡覺', '打東東'],
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
        }
    },
}
</script>