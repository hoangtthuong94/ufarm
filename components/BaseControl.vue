<script>
  import {randomId} from '../utils/common';

  export default {
    model: {
      prop: 'childData',
      event: 'input'
    },
    props: {
      name: String,
      label: String,
      placeholder: String,
      title: String,
      disabled: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false
      },
      requiredErrorMessage: {
        type: String,
        default: 'This field is required.'
      },
      validMessage: {
        type: String,
        default: ''
      },
      cleanCustomErrorMessageOnChanged: null,
      customErrorMessages: null,
      childData: null,
    },
    computed: {
      innerValue: {
        get() {
          return this.childData;
        }
        ,
        set(value) {
          this.$emit('input', value);
        }
      },
      hasRequiredError() {
        return this.required && this.innerValue !== false && this.innerValue !== 0 && !this.innerValue;
      },
      hasCustomError() {
        return !!(this.innerCustomErrorMessages && this.innerCustomErrorMessages[0]);
      },
      valid() {
      },
      invalid() {
      },
    },
    data() {
      return {
        id: 'form-' + randomId(),
        innerCustomErrorMessages: [],
      }
    },
    watch: {
      customErrorMessages: function (messages) {
        if (!messages) {
          this.innerCustomErrorMessages = [];
        } else if ('string' === typeof messages) {
          this.innerCustomErrorMessages = [messages];
        } else if (messages[0]) {
          this.innerCustomErrorMessages = messages;
        } else {
          this.innerCustomErrorMessages = [];
        }

      },
      innerValue() {
        //remove custom error when model change
        this.innerCustomErrorMessages = [];
      }
    },
  }
</script>
