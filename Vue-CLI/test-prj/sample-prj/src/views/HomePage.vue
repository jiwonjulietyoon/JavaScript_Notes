<template>
    <div id="wrap">
        <HeaderHome />
        <div class="homeContent">
            <section id="aboutme">About Me</section>
            <section id="portfolio">Portfolio</section>
            <section id="posts">Posts</section>
            <section id="projects">Projects</section>
        </div>
    </div>
</template>


<script>

import '../js/navbar.js';
import HeaderHome from '../components/HeaderHome';

export default {
    name: "HomePage",
    components: {
        'HeaderHome': HeaderHome
    },
    methods: {
        scrollTo(target) {
            let targetscrolltop = $(target).offset().top
            $('html, body').animate({
                scrollTop: targetscrolltop
            }, 500);
        }
    }
}
</script>



<style lang="scss" scoped>
#wrap {
    width: 100%;
}
.homeContent {
    width: 100%;
}
section {
    width: 100%;
    height: 500px;
    position: relative;
    &:nth-of-type(even) {
        background: #EEEEEE;
    }
    &:nth-of-type(odd) {
        background: white;
    }
}
#aboutme::after {
    width: 100%;
    content: '';
    position: absolute;
    bottom: -30px;
    left: 0;
    border-style: solid;
    border-width: 0 100vw 30px 0;
    border-color: transparent white transparent transparent;
    z-index: 9;
}

</style>