<template>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"   @submit.prevent="onSubmit">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input v-model="userForm.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>    
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input v-model="userForm.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input  v-model="userForm.password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign In
      </button> 
      <router-link :to="{ name: 'register' }" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">¿No tienes cuenta?</router-link>
    </div>
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
        const { createUser } = useAuth()

        const userForm = ref({
            name: 'Fernando',
            email: 'fernando@gmail.com',
            password: '123456',
        })


        return {
            userForm,

            onSubmit: async() => {
                const { ok, message } = await createUser( userForm.value )

                if ( !ok ) Swal.fire('Error', message, 'error' )
                else router.push({ name: 'login' })
            }
        }
    }


}
</script>
