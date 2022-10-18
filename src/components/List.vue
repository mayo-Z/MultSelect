<template>
      <div class="sele">

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

let props = defineProps({
    todos:{
        type:Object as()=>Todo[]
    }
})


</script>

<style lang=''>

</style>
