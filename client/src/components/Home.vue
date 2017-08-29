<template>
    <v-app id="app" toolbar> 
      <v-navigation-drawer absolute persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar tag="div">
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list dense>
          <template v-for="(item, i) in items">
            <v-layout
              row
              v-if="item.heading"
              align-center
              :key="i"
            >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  <strong>{{ item.heading }}</strong>
                </v-subheader>
              </v-flex>

            </v-layout>
            <v-divider
              dark
              v-else-if="item.divider"
              class="my-4"
              :key="i"
            ></v-divider>
            <v-list-tile
              :key="i"
              v-else
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar fixed class="indigo darken-4" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Wreaths Across America</v-toolbar-title>
      </v-toolbar>

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
  export default {
    data () {
      return {
        items: [
          { icon: 'location_city', text: "Cemetery's" },
          { icon: 'people', text: 'Customers' },
          { icon: 'receipt', text: 'Orders' },
          { icon: 'local_hospital', text: 'Veterans' },
        ],
        drawer: false,
        mini: false,
        right: null
      }
    }
  }
</script>