import { defineStore } from 'pinia'

export const useMenuStore = defineStore('uh-menu', () => {
  
  const subNavBgClass = ref('bg-1')
  
  const useSubNavBg2 = () => {
    subNavBgClass.value = 'bg-2'
  }
  const useSubNavBg1 = () => {
    subNavBgClass.value = 'bg-1'
  }

  const subNavClasses = computed(() => subNavBgClass.value )

  return {
    subNavBgClass,
    subNavClasses,
    useSubNavBg1,
    useSubNavBg2
  }
})
