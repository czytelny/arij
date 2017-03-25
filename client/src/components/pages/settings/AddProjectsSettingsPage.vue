<template>
  <div>
    <h3>Add Project</h3>
    <a-horizontal-label title="Example title">
      <input type="text" class="u-full-width">
    </a-horizontal-label>
    <a-horizontal-label title="Example title loong title in deed that sjpuld be not so log">
      <input type="text">
    </a-horizontal-label>
  </div>
</template>
<script>
  import HorizontalLabel from '../../HorizontalLabel';

  export default {
    name: 'add-projects-settings-page',
    components: {
      'a-horizontal-label': HorizontalLabel,
    }
  };
</script>
<style>
</style>
