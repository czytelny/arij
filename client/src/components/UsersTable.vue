<template>
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
</template>

<script>
  import Tag from './Tag'
  import { FETCH_USERS } from './../store/action-types'

  export default {
    name: 'users-table',
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
    }
  }
</script>

<style>
</style>
