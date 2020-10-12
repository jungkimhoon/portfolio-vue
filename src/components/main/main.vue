<template>
    <div>
        <app-header></app-header>
        <section id="section0">
            <span style="font-size: 5rem;"><vue-typer text='김정훈 포트폴리오!!!'
                       :type-delay='150'
            ></vue-typer></span>
        </section>
        <!-- 111111111111111111111111111111111111111111111111  section1-->
        <section id="section1">
            <section1></section1>
        </section>

        <!-- 2222222222222222222222222222222222222222222222222  section2-->
        <section id="section2">
           <section2></section2>
        </section>

    <!--33333333333333333333333333333 sec3 33333333333333333333333333333-->
        <section id="section3">
            <div style="height: 40px;"></div>
            <div align="center">
                <span style="border-bottom: 3px solid black;" class="dFont"><h1 data-aos="fade-up">프로젝트</h1></span>
            </div>
            <div class="container">
                <div style="height: 40px;"></div>
                <div class="container">

                    <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="../../assets/kmdb.png" class="card-img imgReverse"
                                     style="cursor: pointer; height: 14rem; width: 22.5rem;"
                                     @click="goLink('movie')">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title dFont">포트폴리오 웹 (2020.10.01 ~ 11) 개인</h4>
                                    <p class="card-text"><p class="card-text">Vue.js SPA 포트폴리오 웹</p>
                                    <li style="font-weight: bold; font-size: 0.9rem;">Bootstrap을 활용한 반응형 웹</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">다양한 npm 라이브러리 활용</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="../../assets/kmdb.png" class="card-img imgReverse"
                                     style="cursor: pointer; height: 14rem; width: 22.5rem;"
                                     @click="goLink('movie')">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title dFont">KMDB 영화정보검색 (2020.09.13 ~ 30) 개인</h4>
                                    <p class="card-text"><p class="card-text">Vue.js + Bootstrap / Spring Boot + JPA + Oracle 개인 프로젝트</p>
                                    <li style="font-weight: bold; font-size: 0.9rem;">Vue.js, JPA 학습을 위한 개인 프로젝트</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">SPA 구현 / 간단한 RESTful API설계</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">로그인 처리를 위한 JWT 구현</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">네이버 검색 API를 활용한 영화검색</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="https://user-images.githubusercontent.com/59942147/90128295-a2dbac00-dda1-11ea-9ac4-140709c8e770.png"
                                     class="card-img imgReverse"
                                     style="cursor: pointer; height: 14rem; width: 22.5rem;"
                                     @click="goLink('movie')">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title dFont">JH.GG 게임전적검색 (2020.07.25 ~ 08.06) 개인</h4>
                                    <p class="card-text">Spring Boot(JSP) + Bootstrap + Mybatis + Oracle 개인 프로젝트</p>
                                    <li style="font-weight: bold; font-size: 0.9rem;">Spring Boot 학습을 위한 MVC 개인 프로젝트</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">리그오브레전드 유저전적 정보검색 기능</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">RIOT API를 이용한 외부 API 사용</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="../../assets/bitfarm.png"
                                     class="card-img imgReverse"
                                     style="cursor: pointer; height: 14rem; width: 22.5rem;"
                                     @click="goLink('movie')">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title dFont">비트농장 농축산쇼핑몰 (2020.03.15 ~ 04.03) 팀</h4>
                                    <p class="card-text">Spring Framework(JSP) + Mybatis + Oracle 팀 프로젝트</p>
                                    <li style="font-weight: bold; font-size: 0.9rem;">Spring Framework MVC 팀프로젝트</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">Spring Security를 활용한 회원 비밀번호 DB 암호화</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">네이버, 페이스북 등 외부 API를 이용한 SNS 로그인 기능</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">회원관리 및 고객센터 게시판 CRUD 연습</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-up">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="https://user-images.githubusercontent.com/59942147/80096081-fe401f00-85a3-11ea-8ebd-64cc46ce641b.png"
                                     class="card-img imgReverse"
                                     style="cursor: pointer; height: 14rem; width: 22.5rem;"
                                     @click="goLink('movie')">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title dFont">FaceChecker (2019 2학기 캡스톤 프로젝트) 팀</h4>
                                    <p class="card-text">라즈베리파이 + Python OpenCV + JSP + Oracle</p>
                                    <li style="font-weight: bold; font-size: 0.9rem;">파이카메라와 Python OpenCV를 통한 얼굴 성별, 나이별 인식</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">얼굴인식데이터 oracle저장</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">JSP 기반 관리자 프로그램 설계</li>
                                    <li style="font-weight: bold; font-size: 0.9rem;">데이터에 알맞는 광고 LCD 출력</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="height: 40px;"></div>
            </div>
        </section>

        <div class="jumbotron jumbotron-fluid" style="background-color: #f1f8ff;">
            <div class="container">
                <h1 class="display-4">김정훈</h1>
                <p class="lead">ing2895@naver.com</p>
                <p class="lead">010-2281-1072</p>
            </div>
        </div>
</div>
</template>

<script>
import header from "./header.vue";
import section1 from "../main/section1.vue"
import section2 from "./section2.vue";

export default {
    components : {
        'app-header': header,
        section1,
        section2
    },
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
html {
    scroll-behavior: smooth;
}

#section0{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash-1024x683.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    width: 100%;
}

#section1{
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
}

#section2{
    background-color: #f1f8ff;
    top: 0;
    left: 0;
    width: 100%;
}

.imgReverse{
    transition: 0.5s ease-in-out;
}
.imgReverse:hover{
    opacity: 0.5;
    filter: alpha(opacity=100);
    /*transform: scale(1.1, 1.1);*/
    /*transition: 0.5s ease-in-out;*/
}
.card{
    overflow: hidden;
}
.card-text{
    font-size: 1.1rem;
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
</style>
