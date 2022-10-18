
<template>
      <div class="sele" :style="colCount">
        <div>
          <el-checkbox label="全选" v-model="allChecked"></el-checkbox>
        </div>
        <div v-for="(todo, index) in todos" :key="todo.id">
            <el-checkbox
              v-model="todo.checked"
              :label="todo.name"
              size="large"
            />
          </div>     
      </div>
</template>

<script setup lang='ts'>
import { Todo } from '../types/todo';
import { computed, ref } from "vue";


let props = defineProps({
    todos:{
        type:Object as()=>Todo[],
        required:true,
    },
    col:{
      type:Number,
      required:true,
    }
})


const colCount = ref("column-count:" +props.col);


const allChecked = computed({
  get() {
    return props.todos.every((item) => item.checked);
  },
  set(newVal) {
    props.todos.forEach((item) => (item.checked = newVal));
  },
});

</script>

<style>
.card-header {
  display: flex;
}
</style>
