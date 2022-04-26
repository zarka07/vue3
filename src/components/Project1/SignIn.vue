<template>
    <div class="form-body">
      <div >
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>Sign In</h3>
                <form class="requires-validation" novalidate>
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
                    <div :class="{ error: v$.password.$errors.length }">
                      <input class="form-control" 
                             type="password" 
                             v-model="password" 
                             placeholder="Password" 
                             autocomplete ="current-password" 
                             required>

                      <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                        <div style="color:red" class="error-msg">{{ error.$message }}</div>
                      </div>
                    </div>
                  </div>

                  <div class="form-button mt-3">
                    <button type="button" @click.prevent="$emit('back')" class="btn btn-primary">back</button>
                  </div>
                  <div class="form-button mt-3">
                    <button type="submit" @click.prevent="signIn" class="btn btn-success">Sign in</button>
                  </div>
                </form>
              </div>
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
    name: 'signin-component',
    setup(){
        return { v$: useVuelidate() }
    },
    data() {
       const mainStore = UserStore();
        return{
          mainStore,
            email:'',
            password:'',
          } 
    },
    validations(){
        return{
            email:{email, required},
            password:{required, minLength:minLength(8)}
        }
    },
    emits: ['showUser', 'back'],
    methods:{
      async signIn(){
        if(this.v$.$invalid){
          this.v$.$touch()
          return
        }
        const isFormCorrect = await this.v$.$validate()
        if(!isFormCorrect) return
        const formData = {
          email: this.email,
          password: this.password,
        }
        try {
          this.mainStore.signIn(formData)
          this.$emit('showUser')
        } catch (e) {
          console.log(e)
        }
      }  
    }  
}
</script>
