import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './BoroughCard.css'
import BoroughCard from './BoroughCard'

function App() {
  return (
    <>
    <h1>🗽 NYC Borough Shout-Out</h1>

    {/* Default (Queens) */}
    <BoroughCard/>

    {/* With Props*/}
    <BoroughCard borough="Manhattan" bgColor="Yellow" />
    <BoroughCard borough="Brooklyn" bgColor="Purple" />
    <BoroughCard borough="Bronx" bgColor="Lightgreen" />
    <BoroughCard borough="Staten Island" bgColor="blue" />
    </>
  )
}

export default App
