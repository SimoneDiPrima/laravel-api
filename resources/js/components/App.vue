<template>

<div class="content">
    <div class="title m-b-md">
        <h3 class="text-center mt-4">La lista dei miei Post</h3>
        <main class="container">
            <ul class="offset-3 col-6">
                <div v-for="post in posts" class="my-5" key="post.id">
                    <li>{{post.title}}</li>
                    <li>{{post.content}}</li>
                </div>
               
            </ul>
        </main>
       
    </div>
</div>



</template>


<script>
    export default{
        name:'App',
        data(){
            return {
                posts: [], 
            } 
        },
        methods:{
            fetchPosts(){
                axios.get('http://127.0.0.1:8000/api/posts').then((res)=>{
                    this.posts = res.data;
                })
            }
        },
        mounted(){
            this.fetchPosts();
        }
    };


</script>

<style>


</style>

