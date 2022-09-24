<template>
  <div class="p-4 profile">
    <div class="page-title">
      <h3>Profile</h3>
    </div>
    <hr />
    <form class="form">
      <div class="input-field mb-4">
        <input id="description" type="text" placeholder="Name" />
      </div>

      <button type="submit" class="btn btn-success shadow-sm rounded">
        UPDATE <i class="bi bi-send float-end ms-2"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "profile-component",
};
</script>

<style scoped>
.profile {
  min-height: 40vh;
}
</style>
