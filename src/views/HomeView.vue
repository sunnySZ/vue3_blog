<script setup>
import PostList from '../components/PostList.vue'
import getPost from '../common/getPost'
const {posts,loadData}=getPost()


loadData()

</script>

<template>
 <div class="home">
    <div v-if="posts.length" class="layout">
      <PostList :postArr="posts" />
    </div>
    <div v-else>
      加载中...
    </div>
 </div>
</template>

<style>
.home{
   margin:0 auto;
   padding: 10px;
}
.layout{
  display:grid;
  grid-template-columns: 3fr 1fr;
  gap:20px;
}

</style>
