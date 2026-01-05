import { usePlannerStore } from '../store/usePlannerStore.js'
import { generateRoadmap } from '../services/planningLogic.js'

export function useRoadmapGenerator() {
  const { settings, roadmap, setRoadmap, setLoading, setError } =
    usePlannerStore()

  const run = async (usePrevious) => {
    try {
      setLoading(true)
      setError(null)
      const result = await generateRoadmap(settings, usePrevious ? roadmap : null)
      setRoadmap(result)
    } catch (err) {
      setError(err.message || 'Failed to generate roadmap')
    } finally {
      setLoading(false)
    }
  }

  const generate = () => run(false)
  const regenerate = () => run(true)

  return {
    generate,
    regenerate,
    loading: usePlannerStore.getState().loading,
  }
}
