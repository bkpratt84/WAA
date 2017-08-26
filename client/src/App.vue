<template>
   <v-app id="root" >
     <router-view></router-view> 
  </v-app> 

  <!-- <div id="app">
    <router-view></router-view> 
  </div> -->
</template>

<style>
  #root {
    height: 100%;
  }
</style>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header
    },
    created() {
      let token = localStorage.getItem('token');
      let user = localStorage.getItem('user');

      if (token && user) {
        console.log('App.vue: check token/user');
        this.$store.dispatch('setToken', token);
        this.$store.dispatch('setUser', user);
      }
    }
  }
</script>