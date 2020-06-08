<template>
  <div id="app" class="content">
    <Menu />
    <router-view class="main"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';

export default {
  name: 'Product',
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import "./assets/all";

.content{
  display: flex;
  min-height: 100vh;
}
.main{
  flex: 1;
  @media only screen and (max-width: 991px) and (min-width: 576px){
    margin-left: 60px;
  }
  @media (max-width: 576px){
    margin-top: 64px;
  }
}
</style>
