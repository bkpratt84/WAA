<template>
     <v-container>
        <v-layout row wrap class="mt-5">
            <v-flex sm3 md2 offset-sm4 offset-md5>
                <v-card class="elevation-15">
                    <form @submit.prevent="login">
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
                                        :error-messages="($v.form.email.$dirty && !$v.form.email.required) ? 'Email Required.' :
                                                         ($v.form.email.$dirty && !$v.form.email.email) ? 'Invalid email address.' : []"
                                        @input="$v.form.email.$touch()"
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
                                        :error-messages="($v.form.password.$dirty && !$v.form.password.required) ? 'Password Required.' : []"
                                        @input="$v.form.password.$touch()"
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
                            <v-layout v-if="response"> 
                                <v-flex sm12>
                                    <div class="red--text text-xs-center">{{ response }}</div>
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
    .btn--disabled {
        opacity: 1;
    }
</style>

<style>
      #app {
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
                    password: ''
                },
                e1: true,
                response: ''
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