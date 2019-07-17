<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>

    <textarea class="form-control"
              :class="{'is-invalid': invalid, 'is-valid': valid}"
              :id="id"
              :placeholder="placeholder"
              :minlength="minlength"
              :maxlength="maxlength"
              :required="required"
              :title="title"
              :disabled="disabled"
              :readonly="readonly"
              :rows="rows"
              @blur="onBlur"
              @focus="onFocus"
              v-bind="$attrs"
              v-model="innerValue"></textarea>
    <div class="valid-feedback" v-if="valid && validMessage">{{validMessage}}</div>
    <div class="invalid-feedback" v-if="invalid">
      <span v-for="message in errorMessages">{{message}}<br></span>
    </div>
  </div>
</template>

<script>
  import BaseControl from './BaseControl.vue';

  export default {
    name: 'AppFormTextarea',
    inheritAttrs: false,
    extends: BaseControl,
    props: {
      readonly: {
        type: Boolean
      },
      minlength: Number,
      maxlength: Number,
      minLengthErrorMessage: {
        type: String,
        default: 'Value is too short.'
      },
      maxLengthErrorMessage: {
        type: String,
        default: 'Value is too long.'
      },
      rows: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        touched: false
      }
    },
    computed: {
      hasMinLengthError() {
        return this.innerValue && this.innerValue.length < this.minlength;
      },
      errorMessages() {
        if (this.hasRequiredError) {
          return [this.requiredErrorMessage];
        }

        if (this.hasMinLengthError) {
          return [this.minLengthErrorMessage];
        }

        if (this.hasCustomError) {
          return this.innerCustomErrorMessages;
        }
      },
      invalid() {
        if (this.hasCustomError) {
          return true;
        }

        if (!this.touched) {
          return false;
        }

        return !this.innerValue || this.hasRequiredError || this.hasMinLengthError;
      },
      valid() {
        if (this.hasCustomError) {
          return false;
        }

        if (!this.touched) {
          return false;
        }

        return !this.invalid && !this.hasRequiredError && !this.hasMinLengthError;
      }
    },
    methods: {
      onFocus() {
        this.touched = true;
        this.$emit('focus');
      }
      ,
      onBlur() {
        this.$emit('blur')
      }
    }
  }
</script>

<style scoped>

</style>
