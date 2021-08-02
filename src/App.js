import React from 'react'
import Covid from './components/covid'
import {COLORS} from './color'

// const bg_color = #251629;

const App = () => {
  return(
    <div>
      <style>{'body {background-color: '+COLORS.bg_color+';}'}</style>
      <Covid/>
    </div>
  )
}

export default App;