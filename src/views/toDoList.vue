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

        <button v-if='!authorized' v-on:click="handleAuthClick">Sign In</button>
        <button v-if='authorized' v-on:click="handleSignoutClick">Sign Out</button>
        <button v-if='authorized' v-on:click="getData">Get Data</button>
        <div class="item-container" v-if="authorized && items">
            <pre v-html="items"></pre>
        </div>
        <pre id="content" style="white-space: pre-wrap;"></pre>
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
const CLIENT_ID = '937701848678-7sns7fb70f3v81b8c6c4u4mepf1i3t4k.apps.googleusercontent.com';
const API_KEY = 'AIzaSyB-76fvVrkjsxSJ4qmLVbMLDheQoPRSCvU';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export default {
    data() {
        return {
            todos: ['學習', '睡覺', '打東東'],
            inputValue: '',
            items: undefined,
            api: undefined,
            authorized: false
        }
    },

    created() {
        this.api = gapi;
        this.handleClientLoad();
    },

    components: {
        Delete,
    },

    methods: {
        handleClientLoad() {
            this.api.load('client:auth2', this.initClient);
        },

        initClient() {
            let vm = this;

            vm.api.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(_ => {
                // Listen for sign-in state changes.
                vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
            });
        },

        handleAuthClick(event) {
            Promise.resolve(this.api.auth2.getAuthInstance().signIn())
            .then(_ => {
                this.authorized = true;
            });
        },

        handleSignoutClick(event) {
            Promise.resolve(this.api.auth2.getAuthInstance().signOut())
            .then(_ => {
                this.authorized = false;
            });
        },

        getData() {
            let vm = this;

            vm.api.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime'
            }).then(response => {
                vm.items = this.syntaxHighlight(response.result.items);
                console.log(vm.items);
            });
        },

        syntaxHighlight(json) {
            if (typeof json != 'string') {
                json = JSON.stringify(json, undefined, 2);
            }
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            });
        },

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