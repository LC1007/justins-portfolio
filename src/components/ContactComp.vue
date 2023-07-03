<template>
    <div>
        <form action="" class="form">
            <h1 class="display-1 text-center m-5">Con<span>tact Me</span></h1>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="John Doe">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="d-flex justify-content-center m-4">
                <button class="btn btn-primary">Send Message</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>