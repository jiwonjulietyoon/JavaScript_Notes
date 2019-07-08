<template>
    <footer>
        <div class="weather">

        </div>
        <div class="copyrights">SSAFY Seoul 2 Team Six ©2019</div>
        <div class="top-btn" @click="totop">^
        </div>
    </footer>
</template>


<script>
export default {
    name: "Footer",
    methods: {
        totop() {
            $('html, body').animate({
                scrollTop: 0,
            }, 700);
        }
    }
}
</script>



<style lang="scss" scoped>
@import '../css/variables.scss';
footer {
    width: 100%;
    height: 200px;
    background: $darkBg;
    color: white;
    text-transform: uppercase;
    position: relative;
    z-index: 99;
}
.weather {
    width: 500px;
    height: 100px;
    margin: 0 auto;
    background: gray;
}
.copyrights {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.top-btn {
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius: 50%;
    background: $darkBg;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translate(-50%);
    color: white;
    text-align: center;
    font-size: 2em;
    cursor: pointer;
    z-index: 95;
}
</style>