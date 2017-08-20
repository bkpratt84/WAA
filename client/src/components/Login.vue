<template>
    <div class="container row">
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

            <!--pink accent-3-->
            <div v-if="response">
                <div class="card pink accent-3 error">
                    <span>{{ response }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                email: '',
                password: '',
                response: ''
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


<<style scoped>
    .container {
        margin-top: 40px;
    }
    .row.margin {
        margin-bottom: 0px;
    }
    .error {
        width: 100%;
        padding: 5px 10px 5px 10px;
        color: #fff;
    }
</style>

<style>
    body {
        background-color: #1e88e5;
    }
</style>
