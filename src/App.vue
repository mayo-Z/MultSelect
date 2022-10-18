
<template>
  <div class="contain1">
    {{col}}
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <!-- <span>
            Status
            {{ getStatus() }}
          </span> -->
          <Header :addTodo=addTodo :setCol=setCol></Header>
        </div>
      </template>
      <List :todos="todos" :col=col />
    </el-card>
  </div>
</template>


<script setup lang="ts">
import {  computed,reactive, ref, toRefs } from "vue";
import Selection from './components/Selection.vue'
import List from './components/List.vue'
import Header from './components/Header.vue'
import {Todo} from './types/todo'



// 数组数据
const state = reactive<{todos : Todo[]}>({
  todos:[
  {
    id:1,
        name: "选项一",
        checked: false,
      },
      {
        id:2,
        name: "选项二",
        checked: true,
      },
      {
        id:3,
        name: "选项三",
        checked: false,
      },
      {
        id:4,
        name: "选项四",
        checked: false,
      },
  ]
});
let col=ref(3)


let {todos}=toRefs(state)

const addTodo = (todo:Todo)=>{
  state.todos.unshift(todo)
}

const deleteTodo = (index:number)=>{
  state.todos.splice(index,1)
}

const getStatus = () => {
  return state.todos.reduce((pre,todo,index)=>pre+(todo.checked?1:0),0)
};

const setCol = (col1:number)=>{
  col=ref(col1)
}


</script>

<style scoped>
.contain1 { 
width: 500px;
}
.card-header{
  display: flex;
}


</style>
