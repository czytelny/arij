<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <h3>Add Project</h3>
    <form name="newProjectForm" v-on:submit.prevent="addNewProject">
      <a-horizontal-label title="Name">
        <input type="text" v-model="name" class="u-full-width">
      </a-horizontal-label>
      <a-horizontal-label title="Short Name" description="unique identifier of the project">
        <input type="text" v-model="shortcut" class="u-full-width">
      </a-horizontal-label>
      <a-horizontal-label title="Users">
        <multiselect
          v-model="projectUsers"
          :options="allUsers"
          :multiple="true"
          :close-on-select="false"
          :hide-selected="true"
          placeholder="pick users"
          label="label"
          track-by="label"
        ></multiselect>
      </a-horizontal-label>
      <div class="row">
        <div class="column twelve">
          <a-submit-button :isLoading="false">Add project</a-submit-button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex';
  import HorizontalLabel from '../../HorizontalLabel';
  import ASubmitButton from "../../SubmitButton";
  import { FETCH_USERS, SAVE_PROJECT } from './../../../store/action-types'
  import {
    SET_NEW_PROJECT_NAME, SET_NEW_PROJECT_SHORTCUT, SET_NEW_PROJECT_USERS
  } from './../../../store/mutation-types';

  export default {
    name: 'add-projects-settings-page',
    components: {
      'a-horizontal-label': HorizontalLabel,
      'a-submit-button': ASubmitButton,
    },
    computed: {
      name: {
        get() {
          return this.$store.state.projects.newProject.name;
        },
        set(value) {
          this.setNewProjectName(value);
        }
      },
      shortcut: {
        get() {
          return this.$store.state.projects.newProject.shortcut;
        },
        set(value) {
          this.setNewProjectShortcut(value);
        }
      },
      projectUsers: {
        get() {
          return this.$store.state.projects.newProject.users_id;
        },
        set(value) {
          this.setNewProjectUsers(value);
        }
      },
      allUsers() {
        return this.$store.state.users.all.map(({_id: id, name: label}) => ({id, label}));
      }
    },
    beforeMount() {
      this.$store.dispatch(FETCH_USERS);
    },
    methods: {
      ...mapMutations({
        setNewProjectName: SET_NEW_PROJECT_NAME,
        setNewProjectShortcut: SET_NEW_PROJECT_SHORTCUT,
        setNewProjectUsers: SET_NEW_PROJECT_USERS,
      }),
      handleSuccessSave() {
        console.info("Success");
      },
      handleErrorSave() {
        console.info("Error");
      },
      addNewProject() {
        this.$store
          .dispatch(SAVE_PROJECT, this.$store.state.projects.newProject)
          .then(this.handleSuccessSave, this.handleErrorSave)
      },
    }
  };
</script>
<style>
</style>
