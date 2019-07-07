<template>
    <div id="app">
        <router-view />
        <Footer />
    </div>
</template>


<script>
import Footer from './components/Footer';

export default {
    name: "App",
    components: {
        'Footer': Footer,
    },
    data() {
        return {

        }
    }
}
</script>



<style lang="scss">
@import "./css/reset.css";
@import "./css/style.css";
</style>
