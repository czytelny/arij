<template>
  <div>
    <h2>Projects settings page</h2>
    <table class="u-full-width">
      <thead>
      <tr>
        <th>Name</th>
        <th>Users</th>
        <th>Updated</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="project in projects">
        <td>{{project.name}}</td>
        <td>{{project.users_id}}</td>
        <td>{{project.updated_at | detailedDate }}</td>
        <td>
          <a-tag>
            {{project.active ? "Active" : "Inactive"}}
          </a-tag>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {FETCH_PROJECTS} from '../../../../store/action-types';
  import aTag from '../../../common/Tag';

  export default {
    name: 'projects-settings-page',
    components: {
      'a-tag': aTag,
    },
    computed: {
      projects() {
        return this.$store.state.projects.all;
      }
    },
    beforeMount() {
      this.$store.dispatch(FETCH_PROJECTS);
    },
  };
</script>

<style>

</style>
