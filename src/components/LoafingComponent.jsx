'use client'

import React from 'react'
import { Circles } from 'react-loader-spinner'
const LoafingComponent = () => {
  return (
    <div>
        <Circles
  height="80"
  width="80"
  color="#102c57"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  )
}

export default LoafingComponent