<template>
  <div class="container reset-password">
    <div class="row">
      <div class="col-md-9">
        <h1>Reset password</h1>
        <div>Lost your password? Please enter your username or email address. You will receive a link to create a new
          password via email.
        </div>
        <form class="form form-border" @submit.stop.prevent="onSubmit">
          <app-form-input
              :required="true"
              :type="'text'"
              :label="'Password'"
              :placeholder="'Password'"
              v-model="password"/>

          <app-form-input
              :required="true"
              :type="'text'"
              :label="'Confirm password'"
              :match="password"
              :placeholder="'Confirm password'"
              v-model="confirmPassword"/>

          <button class="btn btn-pink-gray mb-2 mt-1">Reset Password</button>
        </form>
      </div>
      <div class="col-md-3">
        <h3 class="need-help">Need help?</h3>
        <h4 class="free-support">Free support</h4>
        <div>We are here to help.<br>Call for free at: <strong>1800 987 6543</strong></div>
        <button class="btn btn-warning mt-4">More information</button>
      </div>
    </div>
  </div>
</template>

<script>
  import AppFormInput from '../components/AppFormInput';
  import AppFormCheckbox from '../components/AppFormCheckbox';
  import AppFormSelect from '../components/AppFormSelect';
  import AppFormTextarea from '../components/AppFormTextarea';

  export default {
    name: 'reset-password',
    components: {AppFormTextarea, AppFormSelect, AppFormCheckbox, AppFormInput},
    data() {
      return {
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      onSubmit() {
        this.$v.form.$touch()
        if (this.$v.form.$anyError) {
          console.log('error');
        }

        // Form submit logic
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .reset-password {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  h1 {
    margin-bottom: 20px;
  }

  form {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid $border-color;
    border-radius: 5px;
  }

  .need-help {
    font-size: 16px;
    padding: 6px 0;
    border-bottom: 1px solid $gray-1;
  }

  .free-support {
    font-size: 26px;
    margin: 15px 0 2px;
  }
</style>
