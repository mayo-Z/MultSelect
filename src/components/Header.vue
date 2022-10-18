<template>
  <div class="header">
    <span>
      Status
      {{ status }}
    </span>
    &nbsp; &nbsp; &nbsp;
    <el-input
      v-model="name1"
      class="input-1"
      size="large"
      placeholder="添加组件"
      @change="add"
    />
    <el-input
      v-model="delname"
      class="del-1"
      size="large"
      placeholder="删除组件"
      @change="del"
    />
    <el-input
      v-model="col1"
      class="input-2"
      size="large"
      placeholder="列数"
      @change="setCol"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, toRefs } from "vue";



let props = defineProps({
  addTodo: {
    type: Function,
    required: true,
  },
  setCol: {
    type: Function,
    require: true,
  },
  status: {
    type: Number,
    require: true,
  },
  delTodo: {
    type: Function,
    required: true,
  },
});

const name1 = ref("");
const delname = ref("");
const col1 = ref();

const add = () => {
  const text = name1.value;
  if (!text.trim()) return;
  const todo = {
    id: Date.now,
    name: text,
    checked: false,
  };
  props.addTodo(todo);
  name1.value = "";
};

const setCol = () => {
  col1.value = col1.value.replace(/[^\d]/g, "");
  const num = col1.value;
  if (!(num >= 1)) return;
  props.setCol(num);
  col1.value = null;
};
const del = () => {
  const text = delname.value;
  if (!text.trim()) return;
  props.delTodo(text);
  delname.value = "";
};
</script>

<style scoped>

.input-1 {
  width: 150px;
}
.del-1 {
  width: 150px;
}
.input-2 {
  width: 100px;
}
</style>
