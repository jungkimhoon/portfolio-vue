<template>
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div style="height: 40px;"></div>
        <h1 class="dFont" align="center">{{ aboutMe }}</h1><br>
        <div class="row">
            <div class="col-md-3" align="center">
                <div>
                    <div style="height: 40px;"></div><br>
                    <img src="../../assets/KJH.jpg" width="200" height="250"><br><br>

                </div>
            </div>
            <div class="col-md-3 my-auto">
                <span class="ns" style="font-size: 1.5rem; font-weight: bold;">김정훈</span><br>
                <span class="ns" style="font-size: 1rem; font-weight: bold;">명지대학교 정보통신공학과 졸업</span><br>
                <span class="ns" style="font-size: 1rem; font-weight: bold;">1994.11.12</span><br>
                <span class="ns" style="font-size: 1rem; font-weight: bold;">010-2281-1072</span><br>
                <span class="ns" style="font-size: 1rem; font-weight: bold;">ing2895@naver.com</span><br><br>

                <span style="cursor: pointer;"
                      v-on:mouseover="git = !git"
                      v-on:mouseleave="git = !git"
                      v-bind:class="{reverse: git}"
                      title="Github"><i class="fab fa-github fa-2x" @click="goGit"></i></span>&emsp;

                <span style="cursor: pointer;"
                      v-on:mouseover="link = !link"
                      v-on:mouseleave="link = !link"
                      v-bind:class="{reverse: link}"
                      title="Blog"><i class="fas fa-link fa-2x" @click="goBlog"></i></span>
                <br>
            </div>

            <div class="col-md-6 my-auto">
            <h3 class="ns">안녕하세요! 김정훈입니다!</h3><br>
                <span class="ns" style="font-size: 1rem;">학부 캡스톤 프로젝트를 진행하면서 웹개발에 흥미를 느끼게 되었습니다.</span><br>
                <span class="ns" style="font-size: 1rem;">웹개발을 더 깊게 배우고자 자바 개발자 양성과정을 수료하며 웹개발에 관한 전체적인 흐름을 이해할 수 있었습니다.</span><br>
                <span class="ns" style="font-size: 1rem;">현재는 Udemy, Inflean, backjoon 등을 통해 개인 개발 공부를 진행중입니다.</span><br>
                <span class="ns" style="font-size: 1rem;">깊게 파려면 넓게 파라는 말처럼 넓게 배워 깊이 있는 개발자로 성장하겠습니다.</span><br>
                <span class="ns" style="font-size: 1rem;">감사합니다!!!!</span>
            </div>
            <br>


        </div>
        <div style="height: 80px;"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aboutMe : 'About Me',
            git : false,
            link : false,
            hov : false
        }
    },
    methods:{
        goGit(){
            alert('gogit');
        },
        goBlog(){
            alert('goBlog');
        },
        goLink(link){
            alert(link);
            //movie, lol, bitFarm, faceChecker
        }
    },
}
</script>

<style>
.reverse{
    color: magenta;
}


</style>
