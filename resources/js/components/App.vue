<template>

<div class="content">
    <div class="title m-b-md">
        <h3 class="text-center mt-4">La lista dei miei Post</h3>
        <main class="container">
                <ul class="offset-3 col-6 mb-4" v-for="post in posts" :key="post.id" :post="post" >
                    <div class="card mb-4">
                    <img class="card-img-top" src="" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text">{{ post.content }}</p>
                       <h6>{{ pubblicata(post) }}</h6>
                        <a href="#" class="offset-2 col-8 btn btn-primary mb-3">Vedi</a>
                    </div>
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
                posts:[], 
            };
        },
       
        methods:{
            fetchPosts(){
                axios.get(`http://127.0.0.1:8000/api/posts`).then((res)=>{
                    this.posts = res.data;
                })
            },
            pubblicata(post){
              const postDate = new Date(post.created_at);
              let day = postDate.getDate();
              let month = postDate.getMonth()+1;
              let year = postDate.getFullYear();
                
            return `${day}/${month}/${year}`;
            },
        },
        mounted(){
            this.fetchPosts();
        },
    };


</script>


