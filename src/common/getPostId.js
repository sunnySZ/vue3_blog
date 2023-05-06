import {ref} from 'vue'
import axios from 'axios'
const getPostId=(id)=>{
    

const obj=ref({})
const loadDataObj=async()=>{
   try {
    let {data}=await axios("http://localhost:3000/items/"+id)
    obj.value=data 
   }catch(err){
    console.log(err)
   }
}

//loadDataObj()

return {obj,loadDataObj}

}

export default getPostId