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

  export default {
    name: 'title-bar',
    data() {
      return {
        username: "Anonymous",
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
