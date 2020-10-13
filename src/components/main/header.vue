<template>
    <nav class="navbar navbar-expand-custom fixed-top navbar-light py-0 shadow rounded"
         id="scrollSpy" style="background-color: #f1f8ff;">
        <vue-scroll-progress-bar height="0.5rem" backgroundColor="linear-gradient(to right, magenta, #1A8CD9)"/>
        <div class="container-fluid">
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav ns mx-auto" style="font-size: 0.8vw; font-weight: bold;">
                    <a class="nav-link p-3 ns" href="#section0">Main</a>
                    <a class="nav-link p-3 ns" href="#section1">About</a>
                    <a class="nav-link p-3 ns" href="#section2">Skills</a>
                    <a class="nav-link p-3 ns" href="#section3">Project</a>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {}
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link.active {
    background-color: #f373f3;
}

@media (min-width: 300px) {
    .navbar-expand-custom {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }

    .navbar-expand-custom .navbar-nav {
        flex-direction: row;
    }

    .navbar-expand-custom .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem;
    }

    .navbar-expand-custom .navbar-collapse {
        display: flex !important;
    }

    .navbar-expand-custom .navbar-toggler {
        display: none;
    }
}
</style>
