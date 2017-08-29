<template>
    <v-app id="app" toolbar> 

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
      //   items: [
      //     { icon: 'location_city', text: "Cemetery's" },
      //     { icon: 'people', text: 'Customers' },
      //     { icon: 'receipt', text: 'Orders' },
      //     { icon: 'local_hospital', text: 'Veterans' },
      //   ],
      //   drawer: false,
      //   mini: false,
      //   right: null
       }
    },
    components: {
      navigation: Navigation
    }
  }
</script>