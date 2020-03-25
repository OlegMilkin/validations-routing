<template>
    <div id="app">
        <div class="container">
            <form action="" class="pt-3" @submit.prevent="onSubmit">
                <!--Email-->
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                            type="email"
                            id="email"
                            class="form-control"
                            :class="{'is-invalid': $v.email.$error}"
                            @blur="$v.email.$touch()"
                            v-model="email"
                    >
                    <div class="invalid-feedback" v-if="!$v.email.required">
                        Email field is required
                    </div>
                    <div class="invalid-feedback" v-if="!$v.email.email">
                        This field should be an email
                    </div>
                    <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
                        This email is used
                    </div>
                </div>

                <!--Password-->
                <div class="form-group">
                    <label for="Password">Password</label>
                    <input
                            type="password"
                            id="Password"
                            class="form-control"
                            :class="{'is-invalid': $v.password.$error}"
                            @blur="$v.password.$touch()"
                            v-model="password"
                    >
                    <div class="invalid-feedback" v-if="!$v.password.minLength">
                        Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
                    </div>
                </div>

                <!--Confirm password-->
                <div class="form-group">
                    <label for="confirm">Confirm password</label>
                    <input
                            type="password"
                            id="confirm"
                            class="form-control"
                            :class="{'is-invalid': $v.confirmPassword.$error}"
                            @blur="$v.confirmPassword.$touch()"
                            v-model="confirmPassword"
                    >
                    <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
                        Password should match
                    </div>
                </div>
                <button
                        class="btn btn-primary"
                        type="submit"
                        :disabled="$v.$invalid"
                >Submit</button>
            </form>
        </div>
    </div>
</template>

<script>

  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

  export default {
    name: 'App',
    data: () => ({
      email: '',
      password: '',
      confirmPassword: ''
    }),
    methods: {
      onSubmit () {
        console.log('Email', this.email);
        console.log('Password', this.password);
      }
    },
    components: {},
    validations: {
      email: {
        required: required,
        //the same as required
        email,
        uniqEmail: function(newEmail) {
          //return newEmail !== 'test@mail.ru'
          if (newEmail === '') return true;
          return new Promise((resolve) => {
            setTimeout(() => {
              const value = newEmail !== 'test@mail.ru';
              resolve(value)
            }, 3000)
          })
        }
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')
      }
    }
  }
</script>