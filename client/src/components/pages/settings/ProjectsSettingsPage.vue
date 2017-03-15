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
        <td>{{project.name | date('DD-MM-YYYY')}}</td>
        <td>{{project.users_id}}</td>
        <td>{{project.updated_at | date('DD-MM-YYYY') }}</td>
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
  import moment from 'moment';
  import {FETCH_PROJECTS} from './../../../store/action-types';
  import aTag from './../../Tag';

  export default {
    name: 'projects-settings-page',
    components: {
      'a-tag': aTag,
    },
    filters: {
      date(value, pattern) {
        console.info("weszlo!");
        if (moment(value).isValid()) {
          console.info("if!");
          return moment(value, pattern);
        }
        return `${value}foo${pattern}`;
      },
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
