<template>
  <div>
      <h2>Projects settings page</h2>
      <ul>
        <li v-for="project in projects">
          {{project.name}}
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'projects-settings-page',
    computed: {
      projects() {
        return this.$store.state.projects.all;
      }
    },
    beforeMount() {
      this.$store.dispatch('getUserProjects');
    },
  };
</script>

<style>

</style>
