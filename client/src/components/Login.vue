<template>
    <!-- <div class="container row">
        <div class="col s3 offset-s4 z-depth-4 card">
            <form @submit.prevent="login">
                <div class="row margin">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">perm_identity</i>
                        <input id="email"
                            type="text"
                            v-model="email"
                            required>
                        <label for="email" class="center-align grey-text darken-4-text">Email</label>
                    </div>
                </div>
                <div class="row margin">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">lock_open</i>
                        <input id="password"
                            type="password"
                            v-model="password"
                            required>
                        <label for="password" class="center-align grey-text darken-4-text">Password</label>
                    </div>
                </div>
                <div class="row center-align">
                    <button class="btn waves-effect waves-light" type="submit">
                        <i class="material-icons left">done</i>Submit
                    </button>
                </div>
            </form>

            <div v-if="response">
                <div class="card pink accent-3 error">
                    <span>{{ response }}</span>
                </div>
            </div>
        </div>
    </div> -->

     <v-container>
        <v-layout row wrap class="mt-5">
            <v-flex sm3 md2 offset-sm4 offset-md5>
                <v-card class="elevation-15">
                    <form @submit.prevent="login" @input="$v.form.$touch()">
                        <v-card-title class="blue darken-4">
                            <h5 class="ma-0 white--text">Login</h5>
                        </v-card-title>
                        <v-card-text class="pt-0">
                            <v-layout row>
                                <v-flex sm12>
                                    <v-text-field
                                        id="email"
                                        label="E-mail"
                                        v-model="form.email"
                                        prepend-icon="account_box"
                                        :error="$v.form.email.$error"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex sm12>
                                    <v-text-field
                                        id="pw"
                                        label="Password"
                                        v-model="form.password"
                                        prepend-icon="lock"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (e1 = !e1)"
                                        :type="e1 ? 'password' : 'text'"
                                        :error="$v.form.password.$error"
                                    ></v-text-field>
                                    <!-- <pre>{{ $v.form }}</pre> -->
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex sm12>
                                    <v-btn
                                        block
                                        class="blue darken-4 white--text"
                                        type="submit"
                                        :disabled="$v.form.$invalid"
                                    >Login</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container> 
</template>

<<style scoped>
    .error {
        width: 100%;
        padding: 5px 10px 5px 10px;
        color: #fff;
    }
    .btn--disabled {
        opacity: 1;
    }
</style>

<style>
      #app {
        /* background-color: #1e88e5; */
        background-color: #666;
    }  
</style>

<script>
    import { mapActions } from 'vuex';
    import { required, email, minLength } from 'vuelidate/lib/validators';

    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    response: ''
                },
                e1: true
            }
        },
        validations: {
            form: {
                email: {
                    required,
                    email
                },
                password: {
                    required
                }
            }
        },
        methods: {
            ...mapActions({
                setToken: 'setToken',
                setUser: 'setUser'
            }),
            login() {
                this.response = '';
                let req = {
                    email: this.email,
                    password: this.password
                };
                
                this.$http.post('user/authenicate', req)
                .then(response => {
                    if (response.status === 200 && response.data.token) {
                        this.setToken(response.data.token);
                        this.setUser(response.data.user);
                        this.$router.push('/');
                    } else {
                        this.response = response.data.error.message;
                    }
                }, error => {
                        console.log(error);
                   this.response = 'Unable to connect to server.';
                });
            }
        }
    }
</script>