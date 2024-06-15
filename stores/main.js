import { makeRequest } from "@/api"

export const useMainStore = defineStore('main', () => {
  const popup = ref(false)

  const togglePopup = () => {
    popup.value = !popup.value
  }

  return { popup, togglePopup }
})