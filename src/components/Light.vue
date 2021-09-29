<template>
    <div class="singleLight" >
        <div
                :class="[currentColor + 'Light', timer <=3 ? `lightBlink` : ``]"
                v-if="color === currentColor"
        >
            <p>{{timer}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [`currentColor`, `timer`, `color`],
    }
</script>

<style scoped>
    .singleLight{
        width: 150px;
        height: 150px;
        background-color: red;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin: 10px 25px;
        color: #333333;
        text-align: center;
        font-size: 100px;
        line-height: 150px;
        font-family: 'Stick No Bills', sans-serif;
    }
    .redLight{
        background-color: rgba(220, 20, 60, 1);
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .yellowLight{
        background-color: rgba(255, 215, 0, 1);
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .greenLight{
        background-color: rgba(46, 139, 87, 1);
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .lightBlink{
        animation: blinkAnimation .3s infinite linear;
    }
    @keyframes blinkAnimation {
        0%{opacity: 0}
        25%{opacity: 0.5}
        50%{opacity: 1}
        75%{opacity: 0.5}
        100%{opacity: 0}
    }
</style>
