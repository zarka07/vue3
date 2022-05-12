<template>
  <div>
    <div class="Progress" >
        <div class="bar"
            :style = "{background:barColor, width:barPercent+'%', height: barHeight+'px'}">
            <div class="percent"> <b>{{barProgress}}</b></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'progress-bar',
    props:['barColor', 'barPercent', 'barHeight', 'barProgress'],
}
</script>

<style>
    .Progress {
        float:left;
        width: 100%;
        background-color: #F3F4F8;
        margin-top:3vh;
        margin-bottom:5vh;
        box-shadow: inset 0 4px 2px rgba(0, 0, 0, 0.1);
    }

    .bar {
        width: 0%;
        background-color: #B53E42;
        color: #FFF;
        
    }

    .percent{
        font-size:14px;
        padding-top: 2vh;
        margin-left:6vw;
    }
</style>