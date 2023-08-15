import React from 'react'

const Header = ({handleDarkMode}) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button className='save-btn' onClick={()=>handleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
    </div>
  )
}

export default Header  