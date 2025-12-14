import './App.css'
import EnergyPieChart from './components/ui/EnergyPieChart'

function App() {
  return (
    <div color='var(--color-background)'>
      <EnergyPieChart energyMix = {{mix: [{fuel: 'gas', percentage: 30}, {fuel: 'solar', percentage: 70}], cleanEnergy: 70}}></EnergyPieChart>
    </div>
  )
}

export default App