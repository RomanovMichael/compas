export const usePopupStore = defineStore('popup', () => {
  const activePopup = ref('')

  const updatePopup = (name='') => {
    activePopup.value = name

    toggleScroll()
  }

  const toggleScroll = () => { 
    const body = document.body

    if(activePopup.value !== '') body.classList.add('no-scroll')
    else body.classList.remove('no-scroll')
  }

  return { activePopup, updatePopup, toggleScroll}
})