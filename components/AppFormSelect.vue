<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>

    <select class="form-control"
            :id="id"
            :title="title"
            :required="required"
            :disabled="disabled"
            :multiple="multiple"
            v-model="innerValue">
      <option value="" selected disabled>--Please choose an option--</option>
      <option
          v-for="(option, index) in options"
          :key="index"
          :value="index"
      >{{option.text}}
      </option>
    </select>

    <div class="valid-feedback" v-if="valid && validMessage">{{validMessage}}</div>
    <div class="invalid-feedback" v-if="invalid">
      <span v-for="message in errorMessages">{{message}}<br></span>
    </div>
  </div>
</template>

<script>
  import BaseControl from './BaseControl.vue';

  export default {
    name: 'AppFormSelect',
    extends: BaseControl,
    props: {
      multiple: {
        type: Boolean
      },
      options: {
        type: Array,
        default: function () {
          return [
            {id: 1, text: '1', value: '1'},
            {id: 2, text: '2', value: '2'},
            {id: 3, text: '3', value: '3'},
            {id: 4, text: '4', value: '4'},]
        }
      },
      childData: ''
    },
    data() {
      return {
        valueSelect: '',
      }
    },
    computed: {
      innerValue: {
        get() {
          return this.childData;
        }
        ,
        set(value) {
          console.log(value);
          this.$emit('input', value);
        }
      },
    }

  }
</script>

<style scoped>

</style>
