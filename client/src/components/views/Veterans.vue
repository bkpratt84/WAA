<template>
    <v-container class="pa-0">
        <h4>Veterans</h4>
        <veterans-list></veterans-list>
    </v-container>
</template>

<script>
    import VeteransList from '../veterans/DataTable.vue'

    export default {
        components: {
            veteransList: VeteransList
        }
    }
</script>