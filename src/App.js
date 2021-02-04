import React, { useEffect } from 'react'
import './tailwind.output.css'
import {
  StyledDiv,
  StyledHeadline,
} from './components/styles/styles'

function App() {

  return (
    <div className="flex flex-col justify-center text-center">
      <StyledHeadline className="text-center font-bold mt4">AWAKEN</StyledHeadline>
      <div id="lp6-gallery" data-widget="gallery" data-contest="1" data-width="100%" data-height="1200" style={{ marginTop: '60px' }} className="lp6-widget-container"></div>
    </div>
  )
}

export default App;
