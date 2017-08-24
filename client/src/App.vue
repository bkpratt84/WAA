<template>
   <!-- <div>
    <router-view></router-view>
  </div>  -->

   <v-app>
     <router-view></router-view> 
  </v-app> 
</template>

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

<style>
     /* body {
        background-color: #1e88e5;
        margin: 0;
    }  */
</style>
