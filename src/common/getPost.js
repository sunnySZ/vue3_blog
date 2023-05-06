import {ref} from 'vue'
import axios from 'axios'
const getPost=()=>{
    

const posts=ref([
  //  {title:'标题1111111111',body:'vue',id:1},
  //  {title:'标题22222222222222222',body:'react reactreactreactreactreactreactreact',id:2}
])
const loadData=async()=>{
   try {
    let {data}=await axios("http://localhost:3000/items")
    posts.value=data 
   }catch(err){
    console.log(err)
   }
}

//loadData()

return {posts,loadData}

}

export default getPost