<template>
  <div id="app">
    <header class="page-header">
      <title-bar></title-bar>
      <actions-bar></actions-bar>
    </header>
    <div class="page-content">
      <side-navigation></side-navigation>
      <div class="page-content">
        <breadcrumbs></breadcrumbs>
        <main id="main-content">
          <router-view></router-view>
        </main>
      </div>
    </div>
    <footer class="page-footer">
      <small>Arij, 2017</small>
    </footer>
  </div>
</template>

<script>
  import TitleBar from './layout/TitleBar';
  import ActionsBar from './layout/ActionsBar';
  import SideNavigation from './layout/SideNavigation';
  import Breadcrumbs from './layout/Breadcrumbs';

  export default {
    name: 'app',
    components: {
      'title-bar': TitleBar,
      'actions-bar': ActionsBar,
      'side-navigation': SideNavigation,
      breadcrumbs: Breadcrumbs,
    },
  };
</script>

<style>
  #app {

  }
</style>
