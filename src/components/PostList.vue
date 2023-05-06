<script setup>
import PostListItem from './PostListItem.vue'
import {onMounted,onUnmounted,onUpdated} from 'vue'
onMounted(()=>{
   // alert("页面渲染之前执行")
   /// 数据请求
})
// watchEffect()
onUnmounted(()=>{
  //  alert("组件销、执行")
})
onUpdated(()=>{
  //  alert('当组件里面内容发送变化')
})



defineProps({
    postArr:Array
})
</script>

<template>
 <div class="post_list">
   <div v-for="item in postArr" :key="item.id">
    <PostListItem :item="item" />
   </div>
 </div>
</template>

<style scoped>

</style>
