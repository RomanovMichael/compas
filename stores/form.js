import { makeRequest } from '@/api'
import { usePopupStore } from './popup'

export const useFormStore = defineStore('form', () => {
  const isLoading = ref(false)
  const popupStore = usePopupStore()

  const postRequest = async (payload) => {
    isLoading.value = true
    const formData = new FormData()

    for (const [key, value] of Object.entries(payload)) {
      formData.append(key, value)
    }

    try {
      const response = await makeRequest(payload) 
      popupStore.updatePopup('success')
      return response

    } catch(error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  return { postRequest, isLoading }
})