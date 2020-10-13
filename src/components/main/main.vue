<template>
    <div>
        <app-header :class="{'headroom--unpinned': !scrolled, 'headroom--pinned': scrolled}" v-on:scroll="handleScroll"
                    class="headroom header"></app-header>
        <section id="section0">
            <section0></section0>
        </section>

        <section id="section1">
            <section1></section1>
        </section>

        <section id="section2">
            <section2></section2>
        </section>

        <section id="section3">
            <section3></section3>
        </section>

        <section id="section4">
            <section4></section4>
        </section>

    </div>
</template>

<script>
import header from "./header.vue";
import section0 from "./section0.vue";
import section1 from "../main/section1.vue";
import section2 from "./section2.vue";
import section3 from "./section3.vue";
import section4 from "./section4.vue";

export default {
    components: {
        'app-header': header,
        section0,
        section1,
        section2,
        section3,
        section4
    },
    data() {
        return {
            limitPosition: 800,
            scrolled: false,
            lastPosition: 0
        };
    },
    methods: {
        handleScroll() {
            // if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
            //     this.scrolled = true;
            //     // move up!
            // }
            //
            // if (this.lastPosition > window.scrollY) {
            //     this.scrolled = false;
            //     // move down
            // }
            //
            // this.lastPosition = window.scrollY;
            if (window.scrollY < this.limitPosition)
                this.scrolled = false;
            else
                this.scrolled = true;
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

html {
    scroll-behavior: smooth;
}

#section0 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('../../assets/party.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    width: 100%;
}

#section1 {
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
}

#section2 {
    background-color: #f1f8ff;
    top: 0;
    left: 0;
    width: 100%;
}

body {
    position: relative;
}

.vue-typer {
    font-family: 'Noto Sans KR', sans-serif;
}

.vue-typer .custom.char.typed {
    color: white;
}

.vue-typer .custom.caret.typing {
    background-color: white;
}

.header {
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 1;
    opacity: 0;
}

.headroom {
    will-change: transform;
    transition: transform 200ms linear;
}

.headroom--pinned {
    opacity: 1;
    visibility: visible;
    filter: fade(opacity=100);
    transition: 0.3s ease-in-out;
}

.headroom--unpinned {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

</style>
