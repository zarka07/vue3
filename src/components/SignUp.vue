<template>
    <div class="form-body">
      <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Sign Up</h3>
                        <form class="requires-validation" novalidate>
                            <div class="col-md-12">
                                <div :class="{ error: v$.username.$errors.length }">
                                    <input class="form-control" 
                                    type="text" 
                                    v-model="username" 
                                    placeholder="Username" 
                                    autocomplete ="username"
                                    >
                                        <div class="input-errors" v-for="error of v$.username.$errors" :key="error.$uid">
                                            <div style="color:red" class="error-msg">{{ error.$message }}</div>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div :class="{ error: v$.email.$errors.length }">
                                    <input class="form-control" 
                                        type="email" 
                                        v-model="email" 
                                        placeholder="E-mail" 
                                        autocomplete ="email"
                                    >
                                    <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                                        <div style="color:red" class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>
                            </div>

                           <div class="col-md-12">
                                <select class="form-select mt-3" required>
                                    <option selected disabled value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Femail">Femail</option>
                               </select>
                           </div>

                           <div class="col-md-12">
                               <div :class="{ error: v$.password.$errors.length }">
                                    <input class="form-control" 
                                        type="password" 
                                        v-model="password" 
                                        placeholder="Password (at least 8 long)" 
                                        autocomplete ="new-password" 
                                    >
                                    <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                                        <div style="color:red" class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-check" style="margin-top:20px">
                                <div :class="{ error: v$.agree.$errors.length }">
                                    <input class="form-check-input" 
                                        type="checkbox" 
                                        v-model="agree" 
                                        @change="v$.agree.$touch()"
                                    >
                                    <label class="form-check-label">I confirm that all data are correct</label>
                                </div>
                            </div>

                            <div class="form-button mt-3">
                                <button type="submit" 
                                    @click.prevent="signUp" 
                                    class="btn btn-success">Sign Up
                                </button>
                            </div>

                            <div class="form-button mt-3 account">
                                Already have an account?
                                <button type="submit" 
                                    @click.prevent="signIn" 
                                    class="btn account btn-link">Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { UserStore } from '@/stores/UserStore';
import { email, required, minLength } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
export default {
    name: 'signup-component',
    setup(){
        return { v$: useVuelidate() }
    },
    data() {
       const mainStore = UserStore();
        // const { email, password, username } = storeToRefs(mainStore)
        
        return{
          mainStore,
          username:'',
          email:'',
          password:'',
          agree: false
        } 
    },
    validations(){
        return{
            email:{email, required},
            password:{required, minLength:minLength(8)},
            username:{required},
            agree:{checked: v => v}
        }
    },
    emits: ['sign-in'],
    methods:{
        async signUp(){
            if(this.v$.$invalid){
                this.v$.$touch()
                return
            }
            const isFormCorrect = await this.v$.$validate()
            if(!isFormCorrect) return
            const formData = {
                email: this.email,
                password: this.password,
                username: this.username,
            }
            try {
                this.mainStore.addUser(formData)
                this.$emit('showUser')
                console.log('show user')
            } catch (e) {
                console.log(e)
            }
        },  
        signIn(){
            this.$emit('sign-in')
        }
    }
        
    
}
</script>

<style scoped>
    .account{
        color:gold;
    }
    .form-content select .form-content input{
        color:black;
    }
</style>