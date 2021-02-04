import React, { useEffect } from 'react'
import './tailwind.output.css'
import {
  StyledDiv,
  StyledHeadline,
} from './components/styles/styles'

function App() {

  return (
    <div className="flex flex-col justify-center text-center">
      {/* <StyledHeadline className="text-center font-bold mt-5">AWAKEN</StyledHeadline> */}
      <div className="flex justify-center mt-20">
      <img src="https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/Logo_Awaken+Logo.png" alt="awaken-logo" style={{ maxWidth: "300px", maxHeight: "200px" }}/>
      </div>
      <StyledHeadline className="mt-5">“Even our soul itself becomes more beautiful when beauty meets us, takes holds of us, and fires us with enthusiasm.”</StyledHeadline>
      <StyledHeadline>– Dietrich von Hildebrand</StyledHeadline>
      <StyledDiv className="mt-10">What Is Awaken:</StyledDiv>
      <StyledDiv className="px-96">SEEK21 Participants from across the nation have answered the call to create in the chaos of 2020. With their music, art, and writing, these finalists of the Awaken 3.0 Competition have shared their gifts to give SEEK21 attendees the chance to see beauty as a bridge to the Divine, a window to encounter the Person of Christ. On behalf of the Beauty Initiative within FOCUS, Papercastle Records, and Love Good, we invite you to awaken to the mystery of Christ through Beauty.</StyledDiv>
      <StyledDiv className="mt-10">How You Can Participate:</StyledDiv>
      <StyledDiv className="px-96">Winners will be selected from each category by a panel of judges to win mentorships and publishing opportunities in their respective medium. Vote for your favorite artist in each medium by tapping the heart button! The winner will be featured as the “fan favorite” at the end of SEEK21.</StyledDiv>
      <div id="lp6-gallery" data-widget="gallery" data-contest="1" data-width="100%" data-height="1200" style={{ marginTop: '60px' }} className="lp6-widget-container"></div>
    </div>
  )
}

export default App;
