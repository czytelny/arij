<template>
  <div>
    <h3>Users</h3>

    <a-action-panel>
      <slot>
        <a-checkbox v-model="initCheckbox">Show removed users</a-checkbox>
      </slot>
    </a-action-panel>
    <table class="u-full-width">
      <thead>
      <tr>
        <th>Name</th>
        <th>Nickname</th>
        <th>Email</th>
        <th>Roles</th>
      </tr>
      </thead>
      <tbody class="clickableRows">
      <tr v-for="user in usersList">
        <td>{{user.name}}</td>
        <td>{{user.nickName}}</td>
        <td>{{user.email}}</td>
        <td>
          <span v-for="role in user.roles">
            <a-tag :isSpecial="isAdmin(role)">{{role}}</a-tag>
          </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { FETCH_USERS } from './../../../store/action-types'
  import Tag from './../../Tag'
  import Checkbox from './../../Checkbox'
  import TableActionPanel from './../../TableActionPanel'

  export default {
    name: 'users-settings-page',
    data() {
      return {
        initCheckbox: true
      }
    },
    beforeMount() {
      this.$store.dispatch(FETCH_USERS)
    },
    computed: {
      usersList() {
        return this.$store.state.users.all;
      }
    },
    methods: {
      isAdmin(roleName) {
        return roleName.toLowerCase() === 'admin';
      }
    },
    components: {
      'a-tag': Tag,
      'a-checkbox': Checkbox,
      'a-action-panel': TableActionPanel
    }
  };
</script>

<style>

</style>
