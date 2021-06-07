import { ref } from 'vue'

const useSorting = (defaultSorting) => {
  const sort = ref(defaultSorting)
  return { sort }
}

export default useSorting
