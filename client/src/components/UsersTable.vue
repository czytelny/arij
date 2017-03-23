<template>
  <div>
    <table class="u-full-width">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Roles</th>
      </tr>
      </thead>
      <transition-group
        name="staggered-fade"
        tag="tbody"
        class="clickableRows"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <tr v-for="user in usersList" :key="user['_id']"
            :class="{'removed-row' : !user.active}">
          <td>{{user.name}} <span v-if="isRemoved(user)" class="removed">(removed)</span></td>
          <td>{{user.email}}</td>
          <td>
          <span v-for="role in user.roles">
            <a-tag :isSpecial="isAdmin(role)">{{role}}</a-tag>
          </span>
          </td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'
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
            user.email.toLowerCase().includes(this.filter.toLowerCase())
          )
      }
    },
    methods: {
      isRemoved(user) {
        return user.active === false
      },
      isAdmin(roleName) {
        return roleName.toLowerCase() === 'admin'
      },
      beforeEnter(el) {
        el.style.opacity = 0
      },
      enter(el, done) {
        const delay = el.dataset.index * 150
        setTimeout(() => {
          Velocity(
            el,
            {opacity: 1},
            {complete: done}
          )
        }, delay)
      },
      leave(el, done) {
        const delay = el.dataset.index * 150
        setTimeout(() => {
          Velocity(
            el,
            {opacity: 0},
            {complete: done}
          )
        }, delay)
      }
    },
    components: {
      'a-tag': Tag,
    }
  }
</script>

<style>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */
  {
    opacity: 0;
    transform: translateX(30px);
  }

  .removed-row {
    background-color: rgba(44, 62, 80, 0.2);
  }

  .removed {
    font-style: italic;
    font-size: .8em;
  }
</style>
