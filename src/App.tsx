import './App.css'
import EnergyMixDashboard from '@/components/ui/EnergyMixDashboard'
import { ChargingWidget } from '@/features/charging/ChargingWidget'

function App() {
  return (
    <div color='var(--color-background)'>
      <EnergyMixDashboard/>
      <ChargingWidget/>
    </div>
  )
}

export default App