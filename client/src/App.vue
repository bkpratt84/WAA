<template>
  <div>
    <!--<appHeader></appHeader>

    <div class="container">
      <div class="row">
        <div class="col s12">
          <router-view></router-view>
        </div>
      </div>
    </div>-->

    <router-view></router-view>
  </div>
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

</style>
