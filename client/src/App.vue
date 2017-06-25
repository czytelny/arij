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
  @import "styles/skeleton-modifiers.less";
  @import "./../node_modules/vue-multiselect/dist/vue-multiselect.min.css";

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #EEEEEE;
  }

  input[type="text"] {
    border-radius: 3px;
    height: 33px;
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

  .error-color {
    color: @error-color;
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
    max-width: 1440px;
    border-right: 1px dashed #cecece;

  .content-container {
    background-color: @secondary-color;
    flex: 1 1 auto;
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;

  .main-content {
    background: #fefefe;
    flex: 1 1 auto;
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 300px;
    padding: 20px;
  }

  }
  }

  ul.list-unstyled {
    list-style: none;
  }

  table {
    border-collapse: collapse;
  }

  tbody.clickableRows tr {
    cursor: pointer;
    transition: background-color .2s;
  }

  tbody.clickableRows tr:hover {
    background-color: rgba(131, 145, 165, 0.08);
  }

  .without-bottom-margin {
    margin-bottom: 0;
  }

  .button-primary {
    background-color: @active2-color;
    border-color: #c17517;
    transition: all .2s;
  }

  .button-primary:hover {
    background-color: #c17517;
  }

  }
  .toasted .fa {
    margin-left: -5px;
    margin-right: 5px;
  }

  .tooltip {
    display: none;
    opacity: 0;
    transition: opacity .15s;
    pointer-events: none;
    padding: 4px;
    z-index: 10000;

    .tooltip-content {
      background: black;
      color: white;
      border-radius: 4px;
      padding: 2px 5px 2px;
      font-size: .8em;
    }

    &.tooltip-open-transitionend {
      display: block;
    }

    &.tooltip-after-open {
      opacity: 1;
    }
  }

  .action-buttons {
    text-align: left;
    margin-top: 1.5rem;
    padding: 1.5rem;
    button {
      margin: 0;
    }
  }

</style>
