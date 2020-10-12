<template>
    <nav class="navbar navbar-expand-md fixed-top navbar-light py-0 shadow rounded"
         id="scrollSpy" style="background-color: #f1f8ff">
        <vue-scroll-progress-bar height="0.5rem" backgroundColor="linear-gradient(to right, magenta, #51D88A)"/>
        <div class="container">
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav ns" style="font-size: 1rem; font-weight: bold;">
                    <a class="nav-link p-3" href="#section0">zero</a>
                    <a class="nav-link p-3" href="#section1">One</a>
                    <a class="nav-link p-3" href="#section2">Two</a>
                    <a class="nav-link p-3" href="#section3">Three</a>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link.active {
    background-color: #f373f3;
}

</style>
