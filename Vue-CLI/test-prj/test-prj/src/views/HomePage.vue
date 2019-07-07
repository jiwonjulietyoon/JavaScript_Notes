<template>
    <div id="wrap">
        <HeaderHome />
        <div class="homeContent">
            <section id="aboutme"></section>
            <section id="portfolio"></section>
            <section id="posts"></section>
            <section id="projects"></section>
        </div>
    </div>
</template>


<script>
import HeaderHome from '../components/HeaderHome';

export default {
    name: "HomePage",
    components: {
        'HeaderHome': HeaderHome
    }
}
</script>



<style lang="scss" scoped>
#wrap {
    width: 100%;
    height: 2000px;
    position: relative;
}
.header {
    width: 100%;
    height: 200px;
    border: 2px solid;
    position: absolute;
    top: 0; left: 0;
}
.homeContent {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: calc(100vh + 50px);
}
section {
    width: 100%;
    height: 100px;
    &:nth-of-type(even) {
        background: #EEEEEE;
    }
    &:nth-of-type(odd) {
        background: white;
    }
}

</style>