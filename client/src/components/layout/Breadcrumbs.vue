<template>
  <div class="breadcrumbs-container">
    {{currentPath}}
  </div>
</template>

<script>
  export default {
    name: 'breadcrumbs',
    computed: {
      currentPath() {
        return this.$store.state.route.path.slice(1).split("/").join(" > ");
      }
    }
  };
</script>

<style lang="less">
  @import "../../styles/variables.less";

  .breadcrumbs-container {
    flex: none;
    background-color: #dadada;
    padding: 3px 20px;
  }
</style>
