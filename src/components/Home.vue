<template>
    <div class="container" style="text-align: center; cursor: pointer;" @click="goMain">
        <div style="height: 100px;"> </div>
        <vue-typer class="display-3"
                   :text='["안녕하세요.","김정훈의 포트폴리오입니다!!!","방문 감사합니다!!!"]'
                   :repeat='Infinity'
                   initial-action='typing'
                   :pre-type-delay='100'
                   :type-delay='200'
                   :pre-erase-delay='1500'
                   :erase-delay='250'
                   erase-style='backspace'
                   :erase-on-complete='false'
                   caret-animation='blink'
        ></vue-typer>
        <div style="height: 80px;"></div>
        <div>
            <img src="../assets/dolgo.png">
        </div>
    </div>

</template>

<script>
export default {
    methods: {
        goMain(){
            this.$router.push('/main')
        }
    }
}
</script>

<style lang="scss">
.vue-typer .custom.char {
    font-width: bold;
}

</style>
