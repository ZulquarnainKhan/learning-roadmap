export function buildRoadmapPrompt({ settings, roleTrack }) {
  const totalHours = settings.totalDays * settings.dailyHours

  return `
You are an expert learning coach.

The student details:
- Target role: ${settings.role}
- Level: ${settings.level}
- Total days: ${settings.totalDays}
- Hours per day: ${settings.dailyHours}
- Approx total focused hours: ${totalHours.toFixed(1)}

Role core skills:
${roleTrack.coreSkills.map((s) => `- ${s}`).join('\n')}

Task:
Create a 100% explicit  week-by-week roadmap.

Constraints:
- Exactly ${settings.totalDays} days, grouped into weeks.
- Assume ${settings.dailyHours} hours per day.
- Focus on the listed role skills.
- Explain briefly why each week matters.

Respond in valid JSON with this shape:
{
  "summary": "short summary string",
  "weeks": [
    {
      "weekNumber": 1,
      "theme": "string",
      "why": "string",
      "days": [
        {
          "dayNumber": 1,
          "focus": "string",
          "tasks": ["task 1", "task 2"]
        }
      ]
    }
  ]
}
`
}
