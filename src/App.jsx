import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Location from './components/Location'
import Prayer from './components/Prayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <Location />
      <div className="prayers">
        <Prayer prayerName="Dawn" />
        <Prayer prayerName="Sunrise" />
        <Prayer prayerName="Zuhr" />
        <Prayer prayerName="'Asr" />
        <Prayer prayerName="Maghrib" />
        <Prayer prayerName="Isha" />
      </div>
    </>
  )
}

export default App
