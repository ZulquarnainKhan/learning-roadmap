import { ROLE_TRACKS } from '../constants/roleTracks.js'
import { buildRoadmapPrompt } from '../utils/promptTemplates.js'
import { safeParseJson } from '../utils/parsing.js'
import { generateRoadmapFromPrompt } from './geminiClient.js'

export async function generateRoadmap(settings, previousRoadmap = null) {
  const roleTrack = ROLE_TRACKS[settings.role] ?? { coreSkills: [] }
  const prompt = buildRoadmapPrompt({ settings, roleTrack, previousRoadmap })
  const raw = await generateRoadmapFromPrompt(prompt)
  const json = safeParseJson(raw)

  if (!json) {
    throw new Error('Failed to parse roadmap JSON from model response.')
  }

  return json
}
