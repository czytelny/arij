<template>
  <div class="title-bar">
    ARIJ<span class="subtitle">project management tool</span>
    <span class="action pull-right">
       {{username}} (<a :href="logoutUrl">logout</a>)
    </span>
  </div>
</template>

<script>
  import axios from 'axios'
  import { FETCH_LOGGED_USER } from './../../store/action-types'

  export default {
    name: 'title-bar',
    data() {
      return {
        logoutUrl: `${axios.defaults.baseURL}/logout`
      }
    },
    computed: {
      username() {
        return this.$store.state.users.logged.email
      }
    },
    beforeMount() {
      this.$store.dispatch(FETCH_LOGGED_USER)
    },
    methods: {
      callLogout() {
        axios.get('/api/logout/');
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../styles/variables.less";

  .title-bar {
    background-color: @secondary-color;
    text-align: center;
    padding: 5px 10px;
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
  }

  .subtitle{
    font-size: .4em;
    font-weight: normal;
  }

  .pull-right {
    float: right;
  }

  .action {
    color: #cecece;
    font-size: .5em;
    line-height: 3.5em;
    font-weight: normal;
  }

</style>
