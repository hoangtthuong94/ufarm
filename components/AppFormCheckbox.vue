<template>
  <div class="form-group form-check">
    <input
        id="exampleCheck1"
        class="form-check-input"
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
</template>

<script>
  import BaseControl from './BaseControl.vue';

  export default {
    name: 'AppFormCheckbox',
    extends: BaseControl,
    props: {
      checked: Boolean,
      options: {
        type: Array,
        default: []
      }
    },
  }
</script>

<style scoped>

</style>
