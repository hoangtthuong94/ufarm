<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>

    <input
        class="form-control"
        :class="{'is-invalid': invalid, 'is-valid': valid}"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :minlength="minlength"
        :maxlength="maxlength"
        :required="required"
        :title="title"
        :disabled="disabled"
        :readonly="readonly"
        :pattern="pattern"
        :autocomplete="autocomplete ? 'on' : 'off'"
        @blur="onBlur"
        @focus="onFocus"
        v-bind="$attrs"
        v-model="innerValue">
    <div class="valid-feedback" v-if="valid && validMessage">{{validMessage}}</div>
    <div class="invalid-feedback" v-if="invalid">
      <span v-for="message in errorMessages">{{message}}<br></span>
    </div>
  </div>
</template>

<script>
  import BaseControl from './BaseControl.vue';

  export default {
    name: 'AppFormInput',
    inheritAttrs: false,
    extends: BaseControl,
    props: {
      pattern: {
        type: String,
        default: null
      },
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
      patternErrorMessage: {
        type: String,
        default: 'Value is not valid.'
      },
      matchErrorMessage: {
        type: String,
        default: 'Value does not match.'
      },
      autocomplete: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'text',
        validate: (val) => {
          // we only cover these types in our input components.
          return ['text', 'url', 'email', 'password', 'search'].indexOf(val) !== -1;
        }
      },
      match: String
    },
    data() {
      return {
        touched: false,
        _match: String,
      }
    },
    computed: {
      hasPatternError() {
        if (!!(this.pattern && this.innerValue)) {
          const patt = new RegExp(this.pattern);
          return !patt.test(this.innerValue);
        }
        return false;
      },
      hasMatchError() {
        return !!this.match && this.match !== this.innerValue;
      },
      hasMinLengthError() {
        return this.innerValue && this.innerValue.length < this.minlength;
      },
      errorMessages() {
        if (this.hasRequiredError) {
          return [this.requiredErrorMessage];
        }

        if (this.hasMatchError) {
          return [this.matchErrorMessage];
        }

        if (this.hasPatternError) {
          return [this.patternErrorMessage];
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

        return !this.innerValue || this.hasMatchError || this.hasRequiredError || this.hasMinLengthError || this.hasPatternError;
      },
      valid() {
        if (this.hasCustomError) {
          return false;
        }

        if (!this.touched) {
          return false;
        }

        return !this.invalid && !this.hasMatchError && !this.hasRequiredError && !this.hasMinLengthError && !this.hasPatternError;
      },
    }
    ,
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
