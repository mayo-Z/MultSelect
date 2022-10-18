
<template>
  <!-- <div class="contain1">
    <Selection
    :col=col
    :arr=arr
    ></Selection> 
  </div> -->
  <div class="contain1">
    <List :todos="todos" />
  </div>

</template>

<script setup lang="ts">
import {  reactive, ref, toRefs } from "vue";
import Selection from './components/Selection.vue'
import List from './components/List.vue'
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

let {todos}=toRefs(state)


const col = 4
const arr = ref([
      {
        name: "选项一",
        checked: false,
      },
      {
        name: "选项二",
        checked: true,
      },
      {
        name: "选项三",
        checked: false,
      },
      {
        name: "选项四",
        checked: false,
      },
    ]);

</script>

<style scoped>
.contain1 { 
width: 500px;
}


</style>
