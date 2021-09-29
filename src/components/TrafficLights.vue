<template>
    <div>
        <h1>currentColor: {{currentColor}} ||| prevWasRed:{{prevWasRed}} ||| prevWasGreen:{{prevWasGreen}} |||
            time:{{time}} </h1>

        <div class="trafficLightBody">
            <singleLight
                    class="singleLight"
                    color="red"
                    :currentColor="currentColor"
                    :timer="timeLeft"></singleLight>
            <singleLight
                    class="singleLight"
                    color="yellow"
                    :currentColor="currentColor"
                    :timer="timeLeft"></singleLight>
            <singleLight
                    class="singleLight"
                    color="green"
                    :currentColor="currentColor"
                    :timer="timeLeft"></singleLight>
        </div>

    </div>

</template>

<script>
    import Light from "./Light";

    export default {
        data () {
            return {
                timeLeft: 0,
                interval: null,
                prevWasRed: true,
                prevWasGreen: false,
            }
        },
        props: [`currentColor`, `time`],
        components: {
            singleLight: Light,
        },
        methods: {
            setPrevColor () {
                if(this.currentColor === `red`){
                    this.prevWasRed = true
                    this.prevWasGreen = false
                    setTimeout(()=>{
                        this.$router.replace(`/yellow`)
                    }, 10000)
                }
                if(this.currentColor === `green`){
                    this.prevWasGreen = true
                    this.prevWasRed = false
                    setTimeout(()=>{
                        this.$router.replace(`/yellow`)
                    }, 15000)
                }
                if(this.currentColor === `yellow` && this.prevWasRed){
                    this.prevWasRed = false
                    setTimeout(()=>{
                        this.$router.replace(`/green`)
                    }, 3000)
                }
                if(this.currentColor === `yellow` && this.prevWasGreen){
                    this.prevWasGreen = false
                    setTimeout(()=>{
                        this.$router.replace(`/red`)
                    }, 3000)
                }
            },
            setTimer () {
                this.timeLeft = this.time

                if(this.interval) {
                    clearInterval(this.interval)
                }

                this.interval = setInterval(()=>{
                    this.timeLeft = this.timeLeft - 1
                },1000)
            },
        },
        mounted() {
            this.setPrevColor()
            this.setTimer()
        },
        watch: {
            $route() {
                this.setPrevColor()
                this.setTimer()
            },
        },
    }
</script>

<style scoped>
    .trafficLightBody{
        width: 200px;
        height: 500px;
        background-color: #333333;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        margin: 0 auto;
        padding-top: 10px;
    }
    .singleLight:nth-child(1){
        background-color: rgba(220, 20, 60, 0.1);
    }
    .singleLight:nth-child(2){
        background-color: rgba(255, 215, 0, 0.1);
    }
    .singleLight:nth-child(3){
        background-color: rgba(46, 139, 87, 0.1);
    }
</style>
