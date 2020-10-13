<template>
    <div>
    <div style="height: 80px;"></div>
    <div align="center">
        <span style="border-bottom: 3px solid black;" class="dFont"><h1 data-aos="fade-up">프로젝트</h1></span>
    </div>
    <div class="container">
        <div style="height: 40px;"></div>
        <div class="container">

            <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-down-right">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../../assets/portfolio.png" class="card-img imgReverse"
                             style="cursor: pointer; height: 100%; width: 100%;"
                             @click="goLink('portfolio-vue')">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title dFont"
                                @click="goLink('portfolio-vue')"
                                style="cursor: pointer;"    >포트폴리오 웹 (2020.10.01 ~ 11) 개인</h4>
                            <p class="card-text">
                            <p class="card-text">Vue.js SPA 포트폴리오 웹</p>
                            <li style="font-weight: bold; font-size: 0.8vw;">Vue.js, Bootstrap을 활용한 반응형 웹</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">다양한 npm 라이브러리 활용</li>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-down-left">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../../assets/kmdb.png" class="card-img imgReverse"
                             style="cursor: pointer; height: 100%; width: 100%;"
                             @click="goLink('movie')">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title dFont"
                                @click="goLink('movie')"
                                style="cursor: pointer;"
                            >KMDB 영화정보검색 (2020.09.13 ~ 30) 개인</h4>
                            <p class="card-text">
                            <p class="card-text">Vue.js + Bootstrap / Spring Boot + JPA + Oracle 개인 프로젝트</p>
                            <li style="font-weight: bold; font-size: 0.8vw;">Vue.js, JPA 학습을 위한 개인 프로젝트</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">SPA 구현 / 간단한 RESTful API설계</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">로그인 처리를 위한 JWT 구현</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">네이버 검색 API를 활용한 영화검색</li>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-down-right">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img
                            src="https://user-images.githubusercontent.com/59942147/90128295-a2dbac00-dda1-11ea-9ac4-140709c8e770.png"
                            class="card-img imgReverse"
                            style="cursor: pointer; height: 100%; width: 100%;"
                            @click="goLink('LOL')">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title dFont"
                                @click="goLink('LOL')"
                                style="cursor: pointer;"
                            >JH.GG 게임전적검색 (2020.07.25 ~ 08.06) 개인</h4>
                            <p class="card-text">Spring Boot(JSP) + Bootstrap + Mybatis + Oracle 개인 프로젝트</p>
                            <li style="font-weight: bold; font-size: 0.8vw;">Spring Boot 학습을 위한 MVC 개인 프로젝트</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">리그오브레전드 유저전적 정보검색 기능</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">RIOT API를 이용한 외부 API 사용</li>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-down-left">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../../assets/bitfarm.png"
                             class="card-img imgReverse"
                             style="cursor: pointer; height: 100%; width: 100%;"
                             @click="goLink('bitFarm')">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title dFont"
                                @click="goLink('bitFarm')"
                                style="cursor: pointer;"    >비트농장 농축산쇼핑몰 (2020.03.15 ~ 04.03) 팀</h4>
                            <p class="card-text">Spring Framework(JSP) + Mybatis + Oracle 팀 프로젝트</p>
                            <li style="font-weight: bold; font-size: 0.8vw;">Spring Framework MVC 팀프로젝트</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">Spring Security를 활용한 회원 비밀번호 DB
                                암호화
                            </li>
                            <li style="font-weight: bold; font-size: 0.8vw;">네이버, 페이스북 등 외부 API를 이용한 SNS 로그인
                                기능
                            </li>
                            <li style="font-weight: bold; font-size: 0.8vw;">회원관리 및 고객센터 게시판 CRUD 연습</li>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3 mx-auto" style="max-width: 100%;" data-aos="fade-down-right">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../../assets/suho.png"
                             class="card-img imgReverse"
                             style="cursor: pointer; height: 23vh; width: 100%;"
                             @click="goLink('facechecker')">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title dFont"
                                @click="goLink('facechecker')"
                                style="cursor: pointer;"
                            >FaceChecker (2019 2학기 캡스톤 프로젝트) 팀</h4>
                            <p class="card-text">라즈베리파이 + Python OpenCV + JSP + Oracle</p>
                            <li style="font-weight: bold; font-size: 0.8vw;">파이카메라와 Python OpenCV를 통한 얼굴 성별, 나이별
                                인식
                            </li>
                            <li style="font-weight: bold; font-size: 0.8vw;">얼굴인식데이터 oracle저장</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">JSP 기반 관리자 프로그램 설계</li>
                            <li style="font-weight: bold; font-size: 0.8vw;">데이터에 알맞는 광고 LCD 출력</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 80px;"></div>
    </div>
    </div>
</template>

<script>
export default {
    methods : {
        goLink(page){
            window.open('https://github.com/jungkimhoon/'+page)
        }
    }
}
</script>

<style scoped>


.imgReverse {
    transition: 0.5s ease-in-out;
}

.imgReverse:hover {
    opacity: 0.5;
    filter: alpha(opacity=100);
    /*transform: scale(1.1, 1.1);*/
    /*transition: 0.5s ease-in-out;*/
}

.card {
    overflow: hidden;
}

.card-text {
    font-size: 1.1rem;
}

</style>
