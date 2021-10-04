<template>
  <div>
    <h1 class="mainTitle">Traffic lights emulator app</h1>

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
</style>
