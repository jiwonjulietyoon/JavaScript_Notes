<template>
    <header>
        <nav>
            <div>Jiwon :D</div>
            <div>About Me</div>
            <div>Portfolio</div>
            <div>Posts</div>
            <div>Projects</div>
        </nav>
    </header>
</template>


<script>
export default {
    name: "HeaderHome"
}
</script>



<style lang="scss" scoped>
@import '../css/variables.scss';
header {
    width: 100%;
    height: calc(100vh + 50px);
    background: #EEEEEE;
    position: relative;
    position: absolute;
    top: 0; left: 0;
}
nav {
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #CCCCCC;
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
