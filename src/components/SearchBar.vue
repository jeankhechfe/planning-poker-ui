<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <input class="form-control" type="text" placeholder="Search Projects..." aria-label="Search">
            </div>
            <div class="col-md-6">
                <router-link class="btn btn-success float-right" :to="{ name: 'Main' }">Create Project</router-link>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "SearchBar",
}
</script>

<style scoped>
.container {
    background-color: #f6f6f6;
    padding: 15px;
}
.form-control {
    border-radius: 0;
}
.form-control:focus {
    border-color: #CF142B;
    -webkit-box-shadow: none;
    box-shadow: none;
}
</style>