<script setup>
import getPostId from '../common/getPostId'
const props=defineProps({
    id:Number
  })
const {obj,loadDataObj}=getPostId(props.id)
loadDataObj()
</script>
<template>
    <div class="detail" v-if="obj">
        <h3>{{ obj.title }}</h3>
        <p class="pre">{{ obj.body }}</p>
    </div>
    <div v-else>加载中。。。</div>
 
</template>

<style scoped>

</style>