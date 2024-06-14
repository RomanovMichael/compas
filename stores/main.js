export const useMainStore = defineStore('main', () => {
  const popup = ref(false)
  const inputVal = ref('')
  const form = ref({
    data: {
      id:'',
      region: '',
      certificate: ''
    },
    error: false
  })

  const togglePopup = () => {
    popup.value = !popup.value
  }

  return { popup, togglePopup, inputVal }
})