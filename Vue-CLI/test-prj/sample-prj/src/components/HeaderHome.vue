<template>
    <header class="homeHeader">
        <nav class="navbar">
            <div>Jiwon :D</div>
            <div @click="scrollTo('#aboutme')">About Me</div>
            <div @click="scrollTo('#portfolio')">Portfolio</div>
            <div @click="scrollTo('#posts')">Posts</div>
            <div @click="scrollTo('#projects')">Projects</div>
        </nav>
    </header>
</template>


<script>
export default {
    name: "HeaderHome",
    methods: {
        scrollTo(target) {
            this.$parent.scrollTo(target);
        }
    }
}
</script>



<style lang="scss" scoped>
@import '../css/variables.scss';
.homeHeader {
    width: 100%;
    height: calc(100vh + 50px);
    background: #EEEEEE;
    position: relative;
}
.navbar {
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #CCCCCC;
    z-index: 999;
    div {
        float: left;
        padding: 0 20px;
        cursor: pointer;
        &:hover {
            background: #BBBBBB;
        }
    }
}

</style>
