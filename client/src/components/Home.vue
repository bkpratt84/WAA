<template>
    <v-app id="app"> 
      <navigation></navigation>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
</template>

<style>

</style>

<script>
  import Navigation from './Navigation.vue';

  export default {
    data () {
      return {
      
      }
    },
    components: {
      navigation: Navigation
    }
  }
</script>