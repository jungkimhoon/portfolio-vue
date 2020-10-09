<template>
  <body data-spy="scroll" data-target="#navbarCodeply" data-offset="80">
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

</style>
