<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="src/assets/mean.jpg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
      <div style="float:left; width:200px;"> <vue-typer text='김정훈 포트폴리오!!!'></vue-typer></div>
    </a>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <router-link to="#" activeClass="active" tag="li" role="presentation"><a class="nav-link">Home</a></router-link>


              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
          </ul>
      </div>
  </nav>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>
