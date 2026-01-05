import { usePlannerStore } from '../../store/usePlannerStore.js'
import Input from '../common/Input.jsx'
import Select from '../common/Select.jsx'
import Button from '../common/Button.jsx'
import { DEFAULTS } from '../../constants/defaults.js'
import { ROLE_OPTIONS } from '../../constants/roleTracks.js'

function SetupForm() {
  const { settings, updateSettings } = usePlannerStore()

  const handleChange = (field) => (e) => {
    const value =
      field === 'totalDays' || field === 'dailyHours'
        ? Number(e.target.value)
        : e.target.value
    updateSettings({ [field]: value })
  }

  const handlePreset = () => {
    updateSettings({
      totalDays: DEFAULTS.totalDays,
      dailyHours: DEFAULTS.dailyHours,
    })
  }

  return (
    <section className="rounded-2xl border border-slate-800/60 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/40 backdrop-blur sm:p-5">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
            Configure your learning goal
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Choose your role, time budget, and level. The roadmap adapts automatically.
          </p>
        </div>
        <Button
          variant="ghost"
          className="self-start text-[11px] sm:self-auto"
          onClick={handlePreset}
        >
          Use 90 days · 1.5 hrs/day
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
        <Select
          label="Target role"
          value={settings.role}
          onChange={handleChange('role')}
        >
          {ROLE_OPTIONS.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </Select>

        <Select
          label="Current level"
          value={settings.level}
          onChange={handleChange('level')}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </Select>

        <Input
          label="Total days"
          type="number"
          min={7}
          value={settings.totalDays}
          onChange={handleChange('totalDays')}
        />

        <Input
          label="Hours per day"
          type="number"
          min={0.5}
          step={0.5}
          value={settings.dailyHours}
          onChange={handleChange('dailyHours')}
        />
      </div>
    </section>
  )
}

export default SetupForm
