<template>
  <div>
    <div class="Progress">
      <div
        class="bar"
        :style="{
          background: barColor,
          width: barPercent + '%',
          height: barHeight + 'px',
        }"
      >
        <div class="percent">
          <b>{{ barProgress }} </b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  props: {
    barColor: {
      type: String,
      required: false,
      default: "",
    },
    barPercent: {
      type: Number,
      required: false,
      default: 0,
    },
    barHeight: {
      type: Number,
      required: false,
      default: 0,
    },
    barProgress: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.Progress {
  float: left;
  width: 100%;
  background-color: #f3f4f8;
  margin-top: 3vh;
  margin-bottom: 5vh;
  box-shadow: inset 0 4px 2px rgba(0, 0, 0, 0.1);
}

.bar {
  width: 0%;
  background-color: #b53e42;
  color: #fff;
}

.percent {
  font-size: 14px;
  padding-top: 2vh;
  margin-left: 3vw;
}
</style>