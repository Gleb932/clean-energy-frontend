import './App.css'
import EnergyPieChart from './components/ui/EnergyPieChart'

function App() {
  return (
    <div color='var(--color-background)'>
      <div className="flex">
        <EnergyPieChart className="flex-1" energyMix = {{mix: [{fuel: 'gas', percentage: 30}, {fuel: 'solar', percentage: 70}]}} cleanEnergy={70} title='Today'/>
        <EnergyPieChart className="flex-1" energyMix = {{mix: [{fuel: 'gas', percentage: 30}, {fuel: 'solar', percentage: 70}]}} cleanEnergy={70} title='Today'/>
        <EnergyPieChart className="flex-1" energyMix = {{mix: [{fuel: 'gas', percentage: 30}, {fuel: 'solar', percentage: 70}]}} cleanEnergy={70} title='Today'/>
      </div>
    </div>
  )
}

export default App