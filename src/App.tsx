import './App.css'
import EnergyMixDashboard from '@/components/ui/EnergyMixDashboard'
import { ChargingWidget } from '@/features/charging/ChargingWidget'

function App() {
  return (
    <div className="items-center space-y-8 w-full">
      <EnergyMixDashboard/>
      <ChargingWidget/>
    </div>
  )
}

export default App