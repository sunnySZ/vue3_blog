<script setup>
import getPostId from '../common/getPostId'
import Loading from '../components/Loading.vue';

// 另外一种获取参数的方式，通过路由参数传递
// import {useRoute} from 'vue-router'
//const route=useRoute()
//const id=route.params.id


// 路由配置props:true后可以通过props传参
const props=defineProps({
    id:Number
  })
const {obj,loadDataObj}=getPostId(props.id)
loadDataObj()
</script>
<template>
    <div class="detail" v-if="obj.body">
        <h3>{{ obj.title }}</h3>
        <p class="pre">{{ obj.body }}</p>
    </div>
    <div v-else><Loading /></div>
</template>

<style scoped>

</style>