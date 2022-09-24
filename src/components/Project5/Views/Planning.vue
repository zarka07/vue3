<template>
  <div class="p-4 planning">
    <div class="d-flex flex-row mb-3 me-2 justify-content-between">
      <h3>PLanning</h3>
      <h4>12 212</h4>
    </div>
    <hr />
    <section>
      <div>
        <p>
          <strong>Girl:</strong>
          12 122 from 14 0000
        </p>
        <div class="progress" style="height: 5px">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "planning-component",
};
</script>

<style scoped>
.planning {
  min-height: 40vh;
}
</style>
