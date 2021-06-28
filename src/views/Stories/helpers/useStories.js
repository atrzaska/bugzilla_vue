import { ref, watch } from 'vue'
import useCollection from '@/hooks/useCollection'
import useUrlParams from '@/hooks/useUrlParams'
import usePagination from '@/hooks/usePagination'
import useSorting from '@/hooks/useSorting'
import API from '@/services/requests'
import { defaultSorting } from './sorting'

const useStories = ({ filters }) => {
  const project = ref({})
  const sort = useSorting(defaultSorting)
  const { id } = useUrlParams()
  const { collection, total, loading, setCollection } = useCollection()
  const pagination = usePagination({ collection, total })
  const { page } = pagination

  const fetchCollection = () => {
    loading.value = true
    API.fetchProject(id)
      .then((res) => (project.value = res.data))
      .then((result) =>
        API.fetchStories(
          {
            ...filters,
            'filter.projectId': result.id,
            page: page.value,
            sort: sort.value,
          },
          { refresh: true }
        )
      )
      .then((res) => setCollection(res.data))
  }

  const updateStoryState = (story, state) =>
    API.updateStory(story.id, { state }).then(() => {
      loading.value = true
      fetchCollection()
    })

  const onDeleteConfirmed = (story) => {
    API.deleteStory(story.id).then((res) => {
      window.Toast.success(`Story ${story.name} deleted successfully.`)
      fetchCollection()
    })
  }

  const onDelete = (story) =>
    window.Modal.confirmDelete({
      name: story.name,
      onConfirm: () => onDeleteConfirmed(story),
    })

  watch([page, sort], fetchCollection)
  fetchCollection()

  return {
    id,
    project,
    collection,
    loading,
    pagination,
    sort,
    updateStoryState,
    onDelete,
  }
}

export default useStories
