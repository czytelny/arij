<template>
  <div>
    <div class="details-header">
      <h3>Preview User</h3>
      <div class="identifier">user id: {{userId}}</div>
    </div>
  </div>
</template>

<script>
  import { FETCH_USER } from '../../../../store/action-types'

  export default {
    name: 'preview-user',
    props: {
      userId: String,
    },
    beforeMount() {
      this.$store.dispatch(FETCH_USER, this.userId)
    }
  }
</script>

<style scoped lang="less">
  .details-header{
    .identifier{
      font-size: .5rem;
    }
  }
</style>
