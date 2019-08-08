<template>
  <div class="select-container" ref="containerElement">
    <label>
      <span class="label-text" v-if="label">{{ label }}</span>

      <select
          class="form-control"
          :id="id"
          :tabindex="tabIndex"
          :name="name"
          ref="selectElement"
      ></select>
    </label>

    <select class="form-control" name="demo" id="demoSelect">
      <option value="1">1</option>
      <option value="2">12143</option>
      <option value="3">1</option>
      <option value="4">1432</option>
    </select>

    <!--    <div class="invalid-feedback" v-if="message">{{ message }}</div>-->
  </div>
</template>

<script>
  import * as Common from '../utils/common';

  export default {
    name: 'AppFormSelect',
    props: {
      value: {default: null},
      name: {type: String, default: null},
      label: {type: String, default: null},
      placeholder: {type: String, default: null},
      tabIndex: {type: Number, default: null},
      options: {
        type: Array,
        default: function () {
          return [];
        }
      },
      required: {type: Boolean, default: false},
      requiredMessage: {type: String, default: ''},
      externalMessage: {type: String, default: ''},
    },
    data() {
      return {
        id: Common.randomId(),
        hasRequiredError: false,
        selectElement: null,
        isFocused: false,
        innerOptions: [],
      };
    },
    mounted() {
      this.selectElement = $(this.$refs.selectElement);
      this.initSelect2(this.options, this.placeholder, this.required);
    },
    methods: {
      generateSelect2Options(options) {
        return options.map(option => ({
          id: option.id || Common.randomId(),
          text: option.toString(),
          value: 'function' === typeof option['toValue'] ? option['toValue']() : option,
        }));
      },
      initSelect2(options, placeholder, required) {
        if (this.selectElement.hasClass('select2-hidden-accessible')) {
          this.selectElement.select2('destroy').html('');
        }

        if (options) {
          this.innerOptions = this.generateSelect2Options(options);
          console.log(this.innerOptions);
        }

        this.selectElement.select2({
          width: '100%',
          data: this.innerOptions,
          placeholder: placeholder || '',
          allowClear: !required,
        });

        this.selectElement.on('select2:opening', () => {
          this.isFocused = true;
        });

        this.selectElement.on('change', event => {
          if (event.target.value) {
            const option = this.innerOptions.find(option => option.id.toString() === event.target.value.toString());
            this.$emit('input', option.value);
          } else {
            this.$emit('input', null);
          }
        });

        if (this.value) {
          this.selectElement.val(this.value.id || null).trigger('change');
        } else {
          this.selectElement.val(null).trigger('change');
        }
      },
    },
    watch: {
      options(newValue) {
        this.initSelect2(newValue, this.placeholder, this.required);
      },
      placeholder(newValue) {
        this.initSelect2(null, newValue, this.required);
      },
      required(newValue) {
        this.initSelect2(null, this.placeholder, newValue);
      },
    },
  }
</script>

<style lang="scss" scoped>

  @import "../assets/scss/mixin";
  @import "../assets/scss/variables";

  .select-container {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 0;

    .label-text {
      display: inline-block;
      margin-bottom: .5rem;
    }
    >>> .select2-container .select2-selection--single{
      height: 100px;
    }
  }

  .select2-container {
    &.select2-container--open {
      .select2-selection--single {
        border-color: $active-color;
      }
    }

    .select2-selection--single {
      border-color: $normal-color;
      background: transparent none !important;
      height: 45px;
      @include transition(all .3s);

      .select2-selection__rendered {
        line-height: 43px;
        padding: 0 40px 0 15px;

        .select2-selection__clear {
          line-height: 41px;
        }
      }

      .select2-selection__clear {
        width: 42px;
        text-align: center;
        margin: 0;
      }

      .select2-selection__arrow {
        height: 43px;
        border-color: $normal-color;
        background: $normal-color;
        width: 42px;
      }
    }

    .select2-dropdown {
      border-color: $active-color;
      @include box-shadow(0 0 0 0rem rgba(44, 171, 227, 0.25));

      .select2-search {
        padding: 15px;

        .select2-search__field {
          border-color: $normal-color;
          padding: 0 15px;
          height: 45px;
        }
      }

      .select2-results__option {
        line-height: 45px;
        padding: 0 15px;

        &.select2-results__option--highlighted {
          background: $active-color;
        }
      }
    }
  }

  .is-invalid {
    .select2-container {
      .select2-selection--single {
        .select2-selection__rendered {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
          background-repeat: no-repeat;
          background-position: center right 50px;
          background-size: calc(.75em + .375rem) calc(.75em + .375rem);

          .select2-selection__clear {
            text-indent: 9999px;
          }
        }
      }
    }

    ~ .invalid-feedback {
      display: block;
    }
  }

  .in-process {
    .select-container {
      pointer-events: none !important;

      .select2-container {
        .select2-selection--single {
          .select2-selection__rendered {
            background: $normal-color !important;
          }
        }
      }
    }
  }
</style>

