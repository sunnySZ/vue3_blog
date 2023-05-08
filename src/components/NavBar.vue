
<template>
    <header>
       <h1>个人博客</h1>
       <nav>
         <router-link to="/">首页</router-link>
         <router-link to="/create">新建</router-link>
       </nav>
    </header>
  
  </template>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
nav a{
    padding: 5px;
}
</style>