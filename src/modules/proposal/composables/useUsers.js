import { ref } from 'vue' 
import axios from 'axios'

const useUsers =  () => {

    const array_users= ref([])
        const isLoading= ref(false)
        const currentPage=ref(1)
        const errorMessage=ref('')

        const getUsers =  async (page = 1) => 
        {
            isLoading.value=true;
            currentPage.value=page;
            const {data} = await axios.get('https://reqres.in/api/users', 
            {
                params : { page }
            })

            if (data.data.length > 0 )
            {
                array_users.value=data.data

            }
            else
            {
                errorMessage.value='No hay mas usuarios'
                array_users.value=[]
            }

            isLoading.value=false

        }

        getUsers();


        return {
            array_users, isLoading, currentPage,errorMessage,
            nextPage : () => { getUsers(currentPage.value + 1)},
            previousPage : () => { getUsers(currentPage.value - 1)}
        }
}

export default useUsers