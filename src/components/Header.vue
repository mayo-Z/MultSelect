
<template>
    <div class="header">
        <!-- <span>
            Status
            {{ getStatus() }}
          </span> -->
    <el-input
    v-model="name1"
      class="input-1"
      size="large"
      placeholder="Please Input"
      @change="add"
    />
    <el-input
      v-model="col1"
      class="input-2"
      size="large"
      placeholder="Please Input"
      @change="setCol"
    />
    </div>
  </template>
  
  
  <script setup lang="ts">
  import {  computed,reactive, ref, toRefs } from "vue";

//   import {Todo} from './types/todo'

let props = defineProps({
    addTodo:{
        type:Function,
        required:true,
    },
    setCol:{
      type:Function,
      require:true
    }
})


const name1 = ref('')
const col1 = ref(0)
  
const add = ()=>{
    const text = name1.value
    if (!text.trim()) return
    const todo={
        id:Date.now,
  name: text,
  checked: false,
    }
    props.addTodo(todo)
    name1.value=''
}

const setCol = ()=>{
    const text = col1.value
    // if (!text.trim()) return
    // props.setCol=text
    props.setCol(text)
    col1.value=0
}
  
  </script>
  
  <style scoped>

  .input-1{
    width: 200px;
  }
  .input-2{
    width: 200px;
  }
  </style>
  