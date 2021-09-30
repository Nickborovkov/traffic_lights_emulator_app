<template>
  <div>
    <h1 class="mainTitle">Traffic lights emulator app</h1>

<!--    <div class="linksHolder">-->
<!--      <h2>Choose light to start with</h2>-->

<!--      <div class="linksWrapper">-->
<!--        <router-link-->
<!--                class="link"-->
<!--                active-class="linkActive"-->
<!--                to="/red">Red</router-link>-->
<!--        <router-link-->
<!--                class="link"-->
<!--                active-class="linkActive"-->
<!--                to="/yellow">Yellow</router-link>-->
<!--        <router-link-->
<!--                class="link"-->
<!--                active-class="linkActive"-->
<!--                to="/green">Green</router-link>-->
<!--      </div>-->
<!--    </div>-->

    <router-view></router-view>

  </div>
</template>

<script>
export default {
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .mainTitle{
    background-color: #42b883;
    text-align: center;
    font-size: 30px;
    color: #333333;
    padding: 10px 0;
    font-family: Calibri;
    margin-bottom: 20px;
  }
  .linksHolder{
    background-color: #42b883;
    color: #333333;
    text-align: center;
    font-family: Calibri;
  }
  .linksWrapper{
    display: flex;
    justify-content: center;
    padding: 10px 0;
    margin-bottom: 10px;
  }
  .link{
    text-decoration: none;
    display: block;
    width: 100px;
    font-size: 20px;
    border: 1px solid #333333;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    margin: 0 20px;
    color: #333333;
  }
  .linkActive{
    background-color: #333333;
    color: #42b883;
  }
</style>
