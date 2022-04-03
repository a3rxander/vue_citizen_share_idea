<template>
    <form  @submit.prevent="onSubmit">
    <img class="mb-4" src="" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input v-model="userForm.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="userForm.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    <router-link :to="{ name: 'register' }" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">¿No tienes cuenta?</router-link>
   
  </form> 
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

import Swal from 'sweetalert2'

export default {
setup() {

    const router = useRouter()
    const { loginUser } = useAuth()

    const userForm = ref({
        email: 'fernando@gmail.com',
        password: '123456',
    })


    return {
            userForm,
            onSubmit: async() => {
              console.log("login");
                const { ok, message } = await loginUser( userForm.value )

                if ( !ok ) Swal.fire('Error', message, 'error' )
                else router.push({ name: 'proposal' })
            }
        }
    }
}
</script>
