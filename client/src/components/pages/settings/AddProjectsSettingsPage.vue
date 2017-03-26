<template>
  <div>
    <h3>Add Project</h3>
    <a-horizontal-label title="Name">
      <input type="text" v-model="name" class="u-full-width">
    </a-horizontal-label>
    <a-horizontal-label title="Short Name">
      <input type="text" v-model="shortName" class="u-full-width">
    </a-horizontal-label>
    <a-horizontal-label title="Users">
      <input type="text" class="u-full-width">
    </a-horizontal-label>
    <a-horizontal-label title="Status">
      <input type="checkbox" v-model="active">
    </a-horizontal-label>
  </div>
</template>
<script>
  import HorizontalLabel from '../../HorizontalLabel';

  export default {
    name: 'add-projects-settings-page',
    components: {
      'a-horizontal-label': HorizontalLabel,
    },
    data() {
      return {
        name: "",
        shortName: "",
        users: [],
        active: true,
      };
    },
  };
</script>
<style>
</style>
