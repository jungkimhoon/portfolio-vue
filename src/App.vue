<template>
    <body data-spy="scroll" data-target="#scrollSpy" data-offset="50" class="scrollspy-example">
      <transition name="slide" mode="out-in">
          <router-view :key="$route.fullPath"></router-view>
      </transition>
    </body>
</template>

<script>
import header from "./components/main/header.vue";

export default {
    components: {
        'app-header' : header
    }
}
</script>

<style>

body {
    position: relative;
}
.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from{
        transform: translateY(-30px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from{
        transform: translateY(0);
        opacity: 1;
    }
    in{
        transform: translateY(-30px);
        opacity: 0;
    }
}


.ns{font-family: 'Noto Sans KR', sans-serif;}
.dFont{
    font-family: 'Black Han Sans', sans-serif;
}

.scrollspy-example {
    position: relative;
    overflow-y: auto;
    margin-top: 10px;
    overflow: auto;
}
</style>
