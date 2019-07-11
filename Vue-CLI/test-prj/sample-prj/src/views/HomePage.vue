<template>
    <div id="wrap">
        <HeaderHome />
        <div class="homeContent">
            <section id="aboutme">
                <h2>About Me</h2>
                <p data-aos="flip-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in, cumque ad facere aliquam sequi, corporis vero doloribus deleniti delectus nesciunt rerum. Libero, deleniti quam voluptatum minima animi soluta sit culpa nisi sed mollitia expedita! Fuga aspernatur illo delectus. Illo iste minus veritatis debitis ipsum nesciunt, repellendus fuga minima tenetur.</p>
            </section>
            <section id="portfolio">
                <h2>Portfolio</h2>
                <div @click="postPortfolio">Create New</div>
                {{ portfolios }}
            </section>
            <section id="posts">Posts</section>
            <section id="projects">Projects</section>
        </div>
    </div>
</template>


<script>

import '../js/navbar.js';
import firebase from '../js/firebase.js';
import HeaderHome from '../components/HeaderHome';

export default {
    name: "HomePage",
    components: {
        'HeaderHome': HeaderHome
    },
    data() {
        return {
            portfolios: []
        }
    },
    beforeMount() {
        this.getPortfolios();
    },
    methods: {
        scrollTo(target) {
            let targetscrolltop = $(target).offset().top
            $('html, body').animate({
                scrollTop: targetscrolltop
            }, 500);
        },
        async getPortfolios() {
            this.portfolios = await firebase.getPortfolios();
        },
        async postPortfolio() {
            let title = "Kansas Hay Market";
            let content = "The hay market trade, activity and demand is moderate, with an increase in alfalfa trades. Prices remained generally steady. Alfalfa prices have been variable, due to the unpredictable weather pattern of this haying season. Prices this week, however, seemed to settle a bit as hay producers finally had a hot and dry week to get hay put up. Due to the shortened holiday week, there will be no report next week, July 9. The next report will be July 16.";
            let img = "https://picsum.photos/id/85/";
            firebase.postPortfolio(title, content, img);
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