<template>
  <div>
    <h3>Users</h3>
    <table class="u-full-width">
      <thead>
      <tr>
        <th>Name</th>
        <th>Nickname</th>
        <th>Email</th>
        <th>Roles</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in usersList">
        <td>{{user.name}}</td>
        <td>{{user.nickName}}</td>
        <td>{{user.email}}</td>
        <td>
          <span v-for="role in user.roles">
            <arij-tag
              :text-message="role"
              :isSpecial="isAdmin(role)"></arij-tag>
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

  export default {
    name: 'users-settings-page',
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
      'arij-tag': Tag
    }
  };
</script>

<style>

</style>
