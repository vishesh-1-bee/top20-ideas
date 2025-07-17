import React from 'react'
import Iddealist from './partials/Iddealist'

const Ideas = ({ results ,refreshData }) => {
  return (
    <div>
      {results.map((ideaa, index) => (
        <Iddealist ideaa={ideaa} index={index} refreshData={refreshData} />
      ))}
    </div>
  )
}

export default Ideas
