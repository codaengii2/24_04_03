import React, { useState } from 'react'
// import * as Naver from 'react-naver-maps'
// import NaverMapsProvider from 'react-naver-maps'
import { NavermapsProvider } from 'react-naver-maps'
import { create } from 'zustand'
import { MyMap } from '../src/MyMap'

function App() {
  const [minutes, setMinutes] = useState('')
  const onChange = event => {
    setMinutes(event.target.value)
  }
  const useStore = create(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: newBears => set({ bears: newBears })
  }))
  return (
    <>
      <div>
        <h1>Super Converter</h1>
        <input
          value={minutes}
          placeholder="Minutes"
          type="number"
          onChange={onChange}
        />
        <h4>you want to convert {minutes} </h4>
        <input
          placeholder="Hours"
          type="number"
        />
      </div>
      <NavermapsProvider ncpClientId="w3i9q0pi5z">
        <MyMap />
      </NavermapsProvider>
    </>
  )
}
export function BearCounter() {
  const bears = useStore(state => state.bears)
  return <h1>{bears} around here...</h1>
}

export function Controls() {
  const increasePopulation = useStore(state => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

export default App
