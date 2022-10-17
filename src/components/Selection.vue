<template>
  <div class="container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>
            Status
            {{ getStatus() }}
          </span>
        </div>
      </template>
      <div class="sele" :style="colCount">
        <div>
          <el-checkbox label="全选" v-model="allChecked"></el-checkbox>
        </div>
          <div v-for="(item, index) in arr" :key="index">
            <el-checkbox
              v-model="item.checked"
              :label="item.name"
              size="large"
            />
          </div>     
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";


interface IData {
    name:string,
    checked:boolean
}

let props = defineProps<{
    col:number,
    arr:IData[]
}>()



let col=props.col
const arr =props.arr

const colCount = ref("column-count:" +col);


const getStatus = () => {
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      tmp = tmp + 1;
    }
  }
  return tmp;
};



const allChecked = computed({
  get() {
    return arr.every((item) => item.checked);
  },
  set(newVal) {
    arr.forEach((item) => (item.checked = newVal));
  },
});


</script>

<style>
.card-header {
  display: flex;
}
</style>
