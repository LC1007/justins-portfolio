<template>
    <div id="projects"></div>
    <div>
        <div class="container">
            <h1 v-motion-slide-bottom class="display-1 text-center m-5">Pro<span>jects</span></h1>
            <div class="row mb-5">
                <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="item in projects" :key="item.id" v-motion-slide-visible-once-bottom>
                    <div class="card h-100 w-100" style="width: 18rem">
                        <img :src="item.img" class="card-img-top pb-3" loading="lazy" :alt="item.projectTitle">
                        <div class="card-body">
                            <h4 class="card-title">{{ item.projectTitle }}</h4>
                            <p class="card-text">{{ item.projectDesc }}</p>
                            <a :href="item.gitHubLink" target="_blank" class="pe-2 text-black"><i class="bi bi-github"></i></a>
                            <a :href="item.demoLink" target="_blank" class="pe-2 text-black"><i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            projects(){
                return this.$store.state.projects
            }
        },
        mounted(){
            this.$store.dispatch('getProjects')
        }
    }
</script>

<style scoped>

</style>