
<template>
   <div class="loading"></div>  
</template>
<style scoped>
.loading{
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: #ff8800;
    animation: loadings 1s ease infinite;
}
@keyframes loadings {
    to{transform: rotateZ(360deg);}
    }
</style>