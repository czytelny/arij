<template>
  <div>
    <h3>Add User</h3>
    <form name="newUserForm" @submit.prevent="onSubmit">
      <div class="flex-container">
        <div class="description-block">
          <div class="flex-item"
               :class="{'error-color': $v.email.$error}">
            <div>email</div>
            <div class="sub-description">unique, your login and identifier</div>
          </div>
          <div class="flex-item"
               :class="{'error-color': $v.name.$error}">
            <div>name</div>
            <div class="sub-description">displayed everywhere</div>
          </div>
          <div class="flex-item"
               :class="{'error-color': isPasswordValid}">
            <div>password</div>
            <div class="sub-description">and confirmation</div>
          </div>
          <div class="flex-item"
               :class="{'error-color': $v.roles.$error}">
            <div>roles</div>
            <div class="sub-description">privileges in system</div>
          </div>
          <div class="flex-item">
            <div>projects</div>
            <div class="sub-description">assign user to project(s)</div>
          </div>
        </div>
        <div class="inputs-block">
          <div class="flex-item">
            <input type="text"
                   name="email"
                   placeholder="email"
                   autocomplete="off"
                   v-model="email"
                   @change="$v.email.$touch()">
            <a-val-message :hasError="$v.email.$error"
                           :isRequired="$v.email.required"
                           :isEmail="$v.email.email">
            </a-val-message>
          </div>
          <div class="flex-item">
            <input type="text"
                   name="name"
                   placeholder="name"
                   autocomplete="off"
                   v-model="name"
                   @change="$v.name.$touch();">
            <a-val-message :hasError="$v.name.$error"
                           :isRequired="$v.name.required">
            </a-val-message>
          </div>
          <div class="flex-item">
            <input type="password"
                   name="password"
                   v-model="password"
                   placeholder="password"
                   autocomplete="off"
                   @change="$v.password.$touch()">
            <input type="password"
                   name="passwordConfirm"
                   v-model="passwordConfirm"
                   placeholder="confirm password"
                   autocomplete="off"
                   @change="$v.passwordConfirm.$touch()">
            <a-val-message :hasError="$v.password.$error"
                           :isRequired="$v.password.required">
            </a-val-message>
            <a-val-message :hasError="$v.passwordConfirm.$error"
                           :isSamePassword="$v.passwordConfirm.sameAsPassword">
            </a-val-message>
          </div>
          <div class="flex-item">
            <multiselect v-if="rolesList.length"
                         v-model="roles"
                         :options="rolesList"
                         :multiple="true"
                         :close-on-select="false"
                         :clear-on-select="false"
                         :hide-selected="true"
                         placeholder="pick roles"
                         @input="$v.roles.$touch()"
            ></multiselect>
            <div v-else><i>Sorry, no roles available...</i></div>
            <a-val-message :hasError="$v.roles.$error"
                           :isRequired="$v.roles.required">
            </a-val-message>
          </div>
          <div class="flex-item">
            <multiselect v-if="projectsList.length"
                         v-model="projects"
                         :options="projectsList"
                         :multiple="true"
                         :close-on-select="false"
                         :clear-on-select="false"
                         :hide-selected="true"
                         placeholder="pick projects"
                         label="name"
                         track-by="name"></multiselect>
            <div v-else><i>Sorry, no projects available...</i></div>
          </div>
        </div>
        <div class="avatar-block" v-if="name">
          <avatar :username="name"
                  :size="100"
                  :rounded="false"
                  :border-radius="2"
                  :backgroundColor="avatarColor"
                  @avatar-initials="avatarInitialsUpdated"></avatar>
          <div class="reload" @click="changeAvatarColor()">shuffle color</div>
        </div>
      </div>
      <div class="row">
        <div class="three columns action">
          <a-submit-button :isLoading="loadingInProgress">Add user</a-submit-button>
        </div>
      </div>
    </form>


  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { required, email, sameAs } from 'vuelidate/lib/validators'
  import Avatar from 'vue-avatar/dist/Avatar'
  import Checkbox from './../../Checkbox'
  import Input from './../../Input'
  import { FETCH_PROJECTS, FETCH_ROLES, SAVE_USER } from './../../../store/action-types'
  import { SET_NEW_USER, SET_NEW_USER_AVATAR, SHUFFLE_NEW_USER_AVATAR_COLOR } from './../../../store/mutation-types'
  import AValMessage from '../../common/ValidationMessage'
  import ASubmitButton from "../../SubmitButton"

  export default {
    name: 'add-users-settings-page',
    data() {
      return {
        loadingInProgress: false
      }
    },
    computed: {
      avatarInitials() {
        return this.$store.state.users.newUser.avatar.initials;
      },
      avatarColor() {
        return this.$store.state.users.newUser.avatar.color;
      },
      email: {
        get() {
          return this.$store.state.users.newUser.email;
        },
        set(emailValue) {
          this.setNewUser({email: emailValue})
        }
      },
      name: {
        get() {
          return this.$store.state.users.newUser.name;
        },
        set(name) {
          this.setNewUser({name})
        }
      },
      password: {
        get() {
          return this.$store.state.users.newUser.password;
        },
        set(password) {
          this.setNewUser({password})
        }
      },
      passwordConfirm: {
        get() {
          return this.$store.state.users.newUser.passwordConfirm;
        },
        set(passwordConfirm) {
          this.setNewUser({passwordConfirm})
        }
      },
      projects: {
        get() {
          return this.$store.state.users.newUser.projects;
        },
        set(projects) {
          this.setNewUser({projects})
        }
      },
      roles: {
        get() {
          return this.$store.state.users.newUser.roles;
        },
        set(roles) {
          this.setNewUser({roles})
        }
      },
      isPasswordValid() {
        return this.$v.password.$error || this.$v.passwordConfirm.$error;
      },
      projectsList() {
        return this.$store.state.projects.all.map(item => (
          {
            /* eslint-disable no-underscore-dangle */
            id: item._id, name: item.name
          })
        );
      },
      rolesList() {
        return this.$store.state.roles.all.map(item => item.name);
      }
    },
    methods: {
      avatarInitialsUpdated(initials) {
        this.setNewUserAvatar({initials});
      },
      changeAvatarColor() {
        this.shuffleAvatarColor()
      },
      ...mapMutations({
        setNewUser: SET_NEW_USER,
        setNewUserAvatar: SET_NEW_USER_AVATAR,
        shuffleAvatarColor: SHUFFLE_NEW_USER_AVATAR_COLOR
      }),
      handleSuccessSave() {
        this.$notify.success('User added')
        this.loadingInProgress = false;
        this.$v.$reset();
      },
      handleErrorSave() {
        this.$notify.error('Adding user failed');
        this.loadingInProgress = false;
      },
      onSubmit() {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          this.loadingInProgress = true;
          this.$store
            .dispatch(SAVE_USER, this.$store.state.users.newUser)
            .then(this.handleSuccessSave, this.handleErrorSave)
        } else {
          this.$notify.error('Adding user failed');
        }
      }
    },
    components: {
      Avatar,
      ASubmitButton,
      AValMessage,
      'a-checkbox': Checkbox,
      'a-input': Input
    },
    beforeMount() {
      this.$store.dispatch(FETCH_PROJECTS)
      this.$store.dispatch(FETCH_ROLES)
    },
    validations: {
      email: {required, email},
      name: {required},
      password: {required},
      passwordConfirm: {sameAsPassword: sameAs('password')},
      roles: {required}
    }
  };
</script>

<style lang="less" scoped>
  @import "./../../../styles/variables.less";

  .flex-container {
    display: flex;
  }

  .flex-item {
    height: 80px;
    transition: all .3s;
  }

  .flex-item input {
    margin: 0;
    width: 250px;
  }

  .multiselect {
    width: 505px;
  }

  .sub-description {
    font-size: .7em;
    font-style: italic;
  }

  .description-block {
    text-align: right;
    border-right: 1px solid #8391a5;
    padding-right: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    width: 15%
  }

  .inputs-block {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .action {
    text-align: center;
  }

  .avatar-block {
    border-left: 1px solid rgba(131, 145, 165, 0.2);
    padding: 0 10px;

    .reload {
      font-size: .7em;
      cursor: pointer;
      color: @active-color;
      user-select: none;
    }

  }


</style>
