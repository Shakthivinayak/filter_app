import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB'
export const external=createContext()

function ComponentA() {
    const[user]=useState("jack")

  return (
    <div><h1>ComponentA</h1>
    <h1>{`hello ${user}`}</h1>
    <ComponentB/>
    </div>
  )
}

export default ComponentA