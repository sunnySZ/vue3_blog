<script setup>
import {ref,reactive,computed,watch,watchEffect} from 'vue'
const props=defineProps({
    item:Object
})
const snippet = computed(()=>{
  let val=props.item.body
  if(val.length>10){
    val=val.substring(0,10)+"..."
  }
   return val
})
</script>

<template>
 <div class="post_list_item">
    <router-link :to="{name:'Details',params:{id:item.id}}">    
       <h3>{{ item.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in item.tags" :key="tag"> #{{ tag }}</span>
 </div>
</template>

<style scoped>
  h3{
   background-color: brown;
   color: white;
  }
  span{
    font-size: 12px;
    color:#333333
  }
</style>
 