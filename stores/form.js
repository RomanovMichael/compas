import { makeRequest } from '@/api'
import { useMainStore } from './main'

export const useFormStore = defineStore('form', () => {
  const isLoading = ref(false)
  const mainStore = useMainStore()

  const postRequest = async (payload) => {
    isLoading.value = true
    const formData = new FormData()

    for (const [key, value] of Object.entries(payload)) {
      formData.append(key, value)
    }

    try {
      const response = await makeRequest(payload) 
      mainStore.togglePopup()
      return response
    } catch(error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  return { postRequest, isLoading }
})