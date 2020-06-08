<template>
  <main>
    <Header />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h2>This is an Home page</h2>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>
