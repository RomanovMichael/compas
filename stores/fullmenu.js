export const useFullmenuStore = defineStore('fullmenu', () => {
  let isOpen = ref(false)

  const toggleMenu = (stateArg = null) => {
    isOpen.value = stateArg ?? !isOpen.value

    toggleScroll()
  }

  const toggleScroll = () => { 
    const body = document.body

    if(isOpen.value) body.classList.add('no-scroll')
    else body.classList.remove('no-scroll')
  }

  return { isOpen, toggleMenu, toggleScroll }
})