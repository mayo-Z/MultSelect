

<template>
  <div class="contain1">
    <Selection
    :col=col
    :arr=arr
    ></Selection> 
  </div>
</template>

<script setup lang="ts">
import {  ref } from "vue";
import Selection from './components/Selection.vue'
// import {iMultSelect} from './api/globalApi'
// const col = iMultSelect.value.col
// const arr = iMultSelect.value.comps

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
