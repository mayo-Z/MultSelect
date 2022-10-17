import { MultSelectApi } from "./commonApi"
import {  ref } from "vue";



interface IData {
  name:string,
  checked:boolean
}

interface IMultSelect {
  col:number,
  comps:IData[]
}

// ------------------------------------------

let iMultSelect=ref<IMultSelect>()

// ------------------------------------------

MultSelectApi().then((res) => {
  iMultSelect.value.col = res.data.result.col;
  iMultSelect.value.comps = res.data.result.comps;
});


export {
  iMultSelect
} 