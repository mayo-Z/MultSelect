<template>
  <div class="contain1">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <Header
            :addTodo="addTodo"
            :setCol="setCol"
            :status="getStatus()"
            :delTodo="deleteTodo"
          ></Header>
        </div>
      </template>
      <List :todos="todos" :colCount="colCount" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, toRefs } from "vue";
import List from "./components/List.vue";
import Header from "./components/Header.vue";
import { Todo } from "./types/todo";

// 数组数据
const state = reactive<{ todos: Todo[] }>({
  todos: [
    {
      id: 1,
      name: "选项一",
      checked: false,
    },
    {
      id: 2,
      name: "选项二",
      checked: true,
    },
    {
      id: 3,
      name: "选项三",
      checked: false,
    },
    {
      id: 4,
      name: "选项四",
      checked: false,
    },
  ],
});

const colCount = ref("column-count:3");

let { todos } = toRefs(state);

const addTodo = (todo: Todo) => {
  state.todos.unshift(todo);
};

const deleteTodo = (str: string) => {
  const idx = state.todos.findIndex((n) => n.name === str);
  if (idx == -1) return;
  state.todos.splice(idx, 1);
};

const getStatus = () => {
  return state.todos.reduce(
    (pre, todo, index) => pre + (todo.checked ? 1 : 0),
    0
  );
};

const setCol = (col1: number) => {
  colCount.value = "column-count:" + col1;
};
</script>

<style scoped>
.contain1 {
  width: 600px;
}
</style>
