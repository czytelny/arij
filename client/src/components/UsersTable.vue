<template>
  <div>
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
      <tr v-for="user in usersList" :class="{'removed-row' : !user.active}">
        <td>{{user.name}} <span v-if="isRemoved(user)" class="removed">(removed)</span></td>
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
  import Tag from './Tag'
  import { FETCH_USERS } from './../store/action-types'

  export default {
    name: 'users-table',
    props: {
      showAll: Boolean,
      filter: [String, Number]
    },
    beforeMount() {
      this.$store.dispatch(FETCH_USERS)
    },
    computed: {
      usersList() {
        return this.$store.state.users.all
          .filter((user) => {
            if (this.showAll) {
              return true
            }
            return user.active === true
          })
          .filter(user => user.name.toLowerCase().includes(this.filter.toLowerCase()) ||
            user.nickName.toLowerCase().includes(this.filter.toLowerCase()) ||
            user.email.toLowerCase().includes(this.filter.toLowerCase())
          );
      },
      filterList() {
        return this.$store.state.users.all
      }
    },
    methods: {
      isRemoved(user) {
        return user.active === false
      },
      isAdmin(roleName) {
        return roleName.toLowerCase() === 'admin'
      }
    },
    components: {
      'a-tag': Tag,
    }
  }
</script>

<style>

  .removed-row {
    background-color: rgba(44, 62, 80, 0.2);
  }

  .removed {
    font-style: italic;
    font-size: .8em;
  }
</style>
