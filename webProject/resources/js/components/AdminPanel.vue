<template>

        <div class="container">
            <div class="row mt-5 mb-3">
                <div class="col-md-12">
                    <a  data-target="#addPost" data-toggle="modal" class="btn mt-5 btn-sm btn-success text-white mb-2">
                    <i class="fa fa-plus"></i>
                    </a>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Categories</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Add by</th>
                                <th>Since</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(post,index) in posts.data" :key="index">
                                <td>{{post.id}}</td>
                                <td>{{post.category.name}}</td>
                                <td>{{post.title}}</td>
                                <td>{{post.body.substr(0,100)}}...</td>
                                <td>
                                    <img :src="'http://127.0.0.1:8000'+post.photo"
                                    class="img-fluid mr-2 rounded shadow-sm"
                                     alt="" height="60" width="60" srcset="">
                                </td>
                                <td>{{post.user.name}}</td>
                                <td>{{post.added}}</td>
                                <td class="d-flex flex-row justify-content-center align-items-center">
                                   <router-link :to="post.path"
                                    class="btn mr-1 btn-sm btn-primary text-white"
                                    >
                                    <div class="fa fa-eye"></div>
                                    </router-link>
                                    <router-link :to="{path : 'post/edit/' + post.slug}"
                                    class="btn mr-1 btn-sm btn-warning text-white"
                                    >
                                    <div class="fa fa-edit"></div>
                                    </router-link>
                                    <a @click="deletePost(post.slug)"
                                        class="btn btn-sm btn-danger text-white"
                                        >
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </td>
                                </tr>
                        </tbody>
                    </table>
                    <div class="card-footer d-flex justify-content-center">
                        <pagination :data="posts" @pagination-change-page="getPosts"></pagination>
                    </div>
                </div>
                <AddPost @added="postAdded"/>
            </div>
        </div>

</template>

<script>
import AddPost from "./AddPost";
export default {
    data() {
        return {
        posts : {},
        loading : true
        }
    },
    components : {AddPost},
    created() {
        this.getPosts();
    },
    methods : {
        getPosts(page){
             if(typeof page === 'undefined'){
                 page = 1;
             }
             console.log(page);
             axios.get('/api/posts?page='+page+'&user_id='+User.isLogged().id)
                  .then(response => {
                      console.log(response.data);
                      this.posts = response.data;
                  })
                  .catch(err => console.log(err));
         },
         postAdded() {
             this.getPosts();
         },
         deletePost(slug)
         {
             Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Are you sure ?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText : "Yes",
                    confirmButtonColor : "#3085D6",
                    cancelButtonText : "No",
                    cancelButtonColor : "#d33",
                    }).then(result => {
                        axios.delete(`/api/posts/${slug}`)
                        .then(res => {
                           Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Post Deleted',
                            showConfirmButton: false,
                            timer: 2500
                            });
                            this.getPosts();
                        }).catch(error => console.log(error));
                    });
         }
    }
};
</script>
