<template>
   <v-app id="root" >
      <router-view></router-view>  
  </v-app> 
</template>

<style>
  #root {
    height: 100%;
  }
</style>

<script>
  export default {
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