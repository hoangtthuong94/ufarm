<template>
  <div class="container login">
    <div class="row">
      <div class="col-md-9">
        <h1>Register</h1>
        <div class="links text-danger" v-if="errorMessage">{{ errorMessage }}</div>
        <form class="form form-border" @submit="onSubmit">
          <app-form-input
              :required="true"
              :type="'email'"
              :label="'Email address'"
              :placeholder="'Email address'"
              name="email"
              v-model="register.email"/>

          <app-form-input
              :required="true"
              :type="'text'"
              :label="'First name'"
              :placeholder="'First name'"
              name="firstName"
              v-model="register.firstName"/>

          <app-form-input
              :required="true"
              :type="'text'"
              :label="'Last name'"
              :placeholder="'Last name'"
              name="lastName"
              v-model="register.lastName"/>

          <app-form-input
              :required="true"
              :type="'password'"
              :label="'Password'"
              :placeholder="'Password'"
              name="password"
              v-model="register.password"/>

          <app-form-input
              :required="true"
              :type="'password'"
              :label="'Password Confirm'"
              :placeholder="'Password'"
              :pattern="register.password"
              name="passwordConfirm"
              v-model="register.passwordConfirm"/>

          <button class="btn btn-pink-gray mb-2 mt-1" :disabled="!isValidForm">Register</button>
          <br/>
          {{!!((this.register.email && this.register.password) && (this.register.password ===
          this.register.passwordConfirm))}}
          <router-link to="request-new-password" class="btn-login">Login ?</router-link>
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
    name: 'register',
    components: {AppFormTextarea, AppFormSelect, AppFormCheckbox, AppFormInput},
    data() {
      return {
        errorMessage: '',
        register: {
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          passwordConfirm: '',
        }
      }
    },
    computed: {
      isValidForm: function () {
        return !!((this.register.email && this.register.password) && (this.register.password === this.register.passwordConfirm));
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        if (!this.isValidForm) {
          return;
        }

        this.errorMessage = '';

        console.log('submit nef', this.register);
        const data = this.$store.dispatch('oauth/register', {
          email: this.register.email,
          password: this.register.password,
          firstName: this.register.firstName,
          lastName: this.register.lastName
        })

      },
      test() {
        console.log('check focus');
        setTimeout(() => {
          console.log('set timeout');
          this.error = 'hoangtthuong94@gmail.com';
        }, 500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .login {
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
