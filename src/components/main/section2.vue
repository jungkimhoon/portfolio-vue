<template>
    <div class="container">
        <div style="height: 40px;"></div>
        <div class="col-md-12">
        <h2 class="ns" style="font-weight: bold;" align="center">Language</h2><br>
        <div class="skill_box" align="center">
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/java.png');"
            >
                <div class="Skill_label"
                >JAVA<br>intermediate</div>
            </div>
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/javascript.png');"
            >
                <div class="Skill_label">Javascript<br>basic</div>
            </div>
        </div>
        <br>
        <h2 class="ns" style="font-weight: bold;" align="center">Front-End</h2><br>
        <div class="skill_box" align="center">
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/html.png');">
                <div class="Skill_label">HTML<br>basic</div>
            </div>
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/css.png');">
                <div class="Skill_label">CSS<br>basic</div>
            </div>
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/vue.jpg');">
                <div class="Skill_label">Vue.js<br>intermediate</div>
            </div>
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/bootstrap.png');">
                <div class="Skill_label">Bootstrap<br>basic</div>
            </div>
        </div>
        <br>
        <h2 class="ns" style="font-weight: bold;" align="center">Back-End</h2><br>
        <div class="skill_box" align="center">
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/springboot.png');">
                <div class="Skill_label">Spring Boot<br>intermediate</div>
            </div>
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/jpa.png');">
                <div class="Skill_label">JPA<br>basic</div>
            </div>
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/mybatis.png');">
                <div class="Skill_label">mybatis<br>basic</div>
            </div>
            <div class="skill_img_container"
                 style="background-image: url('./src/assets/skill/oracle.png');"><div class="Skill_label">
                Javascript<br>basic</div>
            </div>
        </div>
            <div style="height: 50px;"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "section2"
}
</script>

<style>

.skill_img_container{
    transition: 0.5s ease-in-out;
    text-align: center;
    display: inline-block;
    width: 90px;
    height: 90px;
    border-radius: 30px 30px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 2rem;
    box-shadow: 0 3px 6px rgba(0,0,0,.2), 0 3px 6px rgba(0,0,0,.2);
}

.Skill_label{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    border-radius: 30px 30px;
    width: 90px;
    height: 90px;
    padding: 10px;
    opacity: 0;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;

}

.Skill_label:hover{
    opacity: 0.7;
    filter: alpha(opacity=100);
    /*transform: scale(1.1, 1.1);*/
    transition: 0.5s ease-in-out;
}
</style>
