<template>
    
    <h2 v-if="isLoading"> Espere por favor</h2>
    <h2 v-if="errorMessage"> 
        {{errorMessage}}
    </h2>
    {{currentPage}}
    <button @click="nextPage"> NEXT PAGE</button> <button @click="previousPage"> BACK PAGE</button>
    <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name 
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in array_users" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="user.avatar" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{user.first_name}} {{user.last_name}}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{user.email}}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap"> 
                <div class="text-sm text-gray-500">Optimization</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active 
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin  
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div @click="$router.push({name: 'proposal_Propuestasedit' , params: {id:item.id}})" class="text-indigo-600 hover:text-indigo-900">DIV</div>
              </td>
            </tr>

            <!-- More people... -->
          </tbody>
        </table>
</template>
<script>
import useUsers from '../composables/useUsers'

export default {
    setup() {
        
        const { isLoading, 
        array_users, 
        errorMessage, 
        currentPage, 
        nextPage, 
        previousPage 
        } = useUsers()

        return {
            isLoading, 
            array_users, 
            errorMessage, 
            currentPage, 
            nextPage, 
            previousPage 
        }

    },
}
</script>
