<template>
  <div v-if="posts.length">
    <PostList :postArr="postsWithTag" />
    <TagsCloud :postArr="posts" />
   </div>
</template>
<script setup>
import {useRoute} from 'vue-router'
import getPost from '../common/getPost';
import PostList from '../components/PostList.vue';
import TagsCloud from '../components/TagsCloud.vue';
import {computed} from 'vue'
const route=useRoute()
console.log(route.params.tag,333)
const  {posts,loadData}=getPost()
loadData()

// 筛选带标签的数据
const postsWithTag=computed(()=>{
  return posts.value.filter((p)=>p.tags.includes(route.params.tag))
})


</script>
<style scoped>

</style>