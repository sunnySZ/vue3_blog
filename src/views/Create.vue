<script setup>
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'


const router=useRouter()

const title=ref('');
const body=ref('');
const tags=ref([]);
const tag=ref('');
const addTag=()=>{
    if(!tags.value.includes(tag.value)){ // 去重
        tag.value=tag.value.replace(/\s/g,''); // 去空格
        tags.value.push(tag.value);
    }else{
        alert("标签重复")
    }
    tag.value='';// 添加完成后重置
}

const handleSubmit=async ()=>{
    const post={
        id:Math.floor(Math.random()*10000),
        title:title.value,
        body:body.value,
        tags:tags.value
    }
 const data=  await axios.post('http://localhost:3000/items',post);
   if(data.status===201){
    router.push('/')
   }

}


</script>

<template>
  <div class="create">
     <form @submit.prevent="handleSubmit">
        <label for="title">标题</label>
        <input type="text" v-model="title" required />
        <label for="body">内容</label>
        <textarea v-model="body" required />
        <label for="tag">标签(回车添加标签)</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="addTag" />
        <!-- 显示标签 -->
        <div>
          <span v-for="tag in tags" :key="tag" class="tag">
            #{{ tag }}
          </span>
        </div>
        <button>添加</button>
    </form>
  </div>
</template>
<style scoped>
form{
    width: 400px;
    margin: 0 auto;
}
label{display: block;}
textarea{
    display: block;
    width:300px;
}
input{display: block; width: 300px;}
.tag{
    display: inline-block;
    background-color: #666666;
    padding:0 5px;
    color: white;
    margin: 5px;
    border-radius: 5px;
}

</style>