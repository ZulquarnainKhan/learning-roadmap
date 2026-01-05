import { create } from 'zustand'
import { DEFAULTS } from '../constants/defaults.js'

export const usePlannerStore = create((set) => ({
  settings: {
    role: DEFAULTS.role,
    totalDays: DEFAULTS.totalDays,
    dailyHours: DEFAULTS.dailyHours,
    level: DEFAULTS.level,
  },
  roadmap: null,
  loading: false,
  error: null,
  history: [],

  updateSettings: (partial) =>
    set((state) => ({
      settings: { ...state.settings, ...partial },
    })),

  setRoadmap: (roadmap) =>
    set((state) => ({
      roadmap,
      history: [...state.history, { timestamp: Date.now(), roadmap }],
    })),

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}))
