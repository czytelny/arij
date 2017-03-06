<template>
  <div class="title-bar">
    ARIJ
    <span class="action pull-right">
       {{username}} (<a :href="logoutUrl">logout</a>)
    </span>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'title-bar',
    data() {
      return {
        username: null,
        logoutUrl: `${axios.defaults.baseURL}/logout`
      }
    },
    beforeMount() {
      axios.get('/api/activeUser/')
        .then(({data}) => {
          this.username = data.email;
        })
    },
    methods: {
      callLogout() {
        console.log("watch out, logging out!");
        axios.get('/api/logout/');
      }
    }
  };
</script>

<style lang="less">
  @import "../../styles/variables.less";

  .title-bar {
    background-color: #f8f8f8;
    color: #2c3e50;
    text-align: center;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: bold;
  }

  .pull-right {
    float: right;
  }

  .action {
    font-size: .8em;
    line-height: 2em;
  }

</style>
