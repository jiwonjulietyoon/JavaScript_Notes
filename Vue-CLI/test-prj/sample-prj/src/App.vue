<template>
    <v-app id="app">
        <v-content>
            <router-view />
            <Footer />
        </v-content>
    </v-app>
</template>



<script>
// import './js/aniview.js';

import Footer from './components/Footer';
window.$ = window.jQuery = require("jquery");

export default {
    name: 'App',
    components: {
        Footer
    },
    data() {
        return {
            //
        }
    }
}
</script>

<style lang="scss" scoped>
@import './css/reset.css';
@import './css/style.css';
@import './css/lib_animate.css';

</style>

