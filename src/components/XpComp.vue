<template>
    <div class="container">
        <h1 class="display-1 text-center m-5">Time<span>line</span></h1>
        <div class="d-md-flex justify-content-center gap-5 container">
            <div>
                <h3>Edu<span>cation:</span></h3>
                <div v-for="item in education" :key="item.id">
                    <div class="card border-dark mb-3 card-height card-width">
                        <div class="card-body">
                            <h4 class="card-title">{{ item.institution }}</h4>
                            <h6 class="card-subtitle fw-light py-2">{{ item.date }}</h6>
                            <p class="card-text">{{ item.eduDesc }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Wo<span>rk:</span></h3>
                <div v-for="item in work" :key="item.id">
                    <div class="card border-dark mb-3 card-height card-width">
                        <div class="card-body">
                            <h4 class="card-title">{{ item.company }}</h4>
                            <h6 class="card-subtitle fw-light py-2">{{ item.date }}</h6>
                            <p class="card-text">{{ item.jobDesc }}</p>
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
            education(){
                return this.$store.state.education
            },
            work(){
                return this.$store.state.work
            }
        },
        mounted(){
            this.$store.dispatch('getEdu')
            this.$store.dispatch('getWork')
        }
    }
</script>

<style scoped>

</style>