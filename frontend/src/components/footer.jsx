import React from 'react'

const footer = ({ length }) => {
  return (
    <footer>
      {length} {length === 1 ? " item" : " items"}
    </footer>
  )
}

export default footer