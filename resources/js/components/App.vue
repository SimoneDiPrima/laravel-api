<template>

<div class="content">
    <div class="title m-b-md">
        <h3 class="text-center mt-4">La lista dei miei Post</h3>
        <main class="container">
              <HomePage />
        </main>
       
    </div>
 </div>



</template>


<script>
// import PostList from "../pages/PostList.vue";
import HomePage from "../pages/HomePage.vue";
    export default{
    name: "App",
    components: {  HomePage }
};


</script>


