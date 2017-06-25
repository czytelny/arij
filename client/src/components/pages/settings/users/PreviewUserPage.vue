<template>
  <div>
    <div class="details-header">
      <h3>Preview User: {{user.name}}</h3>
    </div>
    <div class="row">
      <a-horizontal-label title="Name, nickname and e-mail">
        {{user.name}} ({{user.nickName}}) - {{user.email}}
      </a-horizontal-label>
      <a-horizontal-label title="Created">
        {{createdAt | detailedDate}}
      </a-horizontal-label>
      <a-horizontal-label title="Last login">
        {{lastLogin | detailedDate}} {{lastLogin ? '' : 'Never'}}
      </a-horizontal-label>
      <a-horizontal-label title="Roles">
          <span v-for="role in user.roles">
                <a-tag>{{role}}</a-tag>
          </span>
      </a-horizontal-label>
      <a-horizontal-label title="Projects">
          <span v-for="project in user.projects">
                <a-tag>{{project}}</a-tag>
          </span>
        <span v-if="listIsEmpty(user.projects)">Not a single one, yet</span>
      </a-horizontal-label>
    </div>
    <div class="row">
      <div class="twelve columns action-buttons">
        <span>
           <router-link to="/settings/users">
             <a-default-button>Back</a-default-button>
           </router-link>
        </span>
        <span class="u-pull-right">
          <a-remove-button>Remove</a-remove-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import HorizontalLabel from '../../../common/HorizontalLabel';
  import Tag from '../../../common/Tag';
  import RemoveButton from '../../../common/RemoveButton';
  import DefaultButton from '../../../common/DefaultButton';
  import { FETCH_USER_PREVIEW } from '../../../../store/action-types'

  export default {
    name: 'preview-user',
    props: {
      userId: String,
    },
    computed: {
      user() {
        return this.$store.state.users.preview;
      },
      createdAt() {
        return this.$store.state.users.preview.created_at;
      },
      lastLogin() {
        return this.$store.state.users.preview.last_login;
      },
      isAdmin(roleName) {
        return roleName.toLowerCase() === 'admin'
      }
    },
    methods: {
      listIsEmpty(list) {
        return _.isEmpty(list);
      }
    },
    beforeMount() {
      this.$store.dispatch(FETCH_USER_PREVIEW, this.userId)
    },
    components: {
      'a-horizontal-label': HorizontalLabel,
      'a-tag': Tag,
      'a-remove-button': RemoveButton,
      'a-default-button': DefaultButton
    }
  }
</script>

<style scoped lang="less">
</style>
