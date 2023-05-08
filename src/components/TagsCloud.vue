<script setup>
import {ref} from 'vue';
  const tags=ref([])
  const tagSet=new Set()
  const arrs=defineProps({
    postArr:Array
  })
  arrs.postArr.forEach((item)=>{
    item.tags.forEach((tag)=>tagSet.add(tag))
  })
  tags.value=[...tagSet]
</script>
<template>
  <div class="tag_cloud">
    <h3>标签</h3>
    <div v-for="tag in tags" :key="tag">
      <RouterLink :to="{name:'Tag',params:{tag}}">{{ tag }}</RouterLink>
     </div>   
  </div>
</template>
<style scoped>

</style>