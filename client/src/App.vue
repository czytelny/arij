<template>
  <div id="app">
    <header class="page-header">
      <title-bar></title-bar>
      <actions-bar></actions-bar>
    </header>
    <div class="page-content">
      <side-navigation></side-navigation>
      <div class="content-container">
        <breadcrumbs></breadcrumbs>
        <main class="main-content">
          <router-view></router-view>
        </main>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import TitleBar from 'components/layout/TitleBar';
  import ActionsBar from 'components/layout/ActionsBar';
  import SideNavigation from 'components/layout/SideNavigation';
  import Breadcrumbs from 'components/layout/Breadcrumbs';
  import FooterBar from 'components/layout/FooterBar';

  export default {
    name: 'app',
    components: {
      'title-bar': TitleBar,
      'actions-bar': ActionsBar,
      'side-navigation': SideNavigation,
      breadcrumbs: Breadcrumbs,
      'footer-bar': FooterBar
    },
  };
</script>

<style lang="less">
  @import "styles/variables.less";

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  a {
    text-decoration: none;
    color: @active2-color;
    cursor: pointer;
    transition: color .2s;
  }

  a:hover {
    color: @active-color;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;

  .page-header {
    flex: none;
  }

  .page-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;

  .content-container {
    background-color: @secondary-color;
    flex: 1 1 auto;
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;

  .main-content {
    background: #eee;
    flex: 1 1 auto;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    min-width: 300px;
    padding: 20px;
  }

  }
  }

  ul.list-unstyled {
    list-style: none;
  }

  }
</style>
