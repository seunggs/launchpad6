import React, { useEffect } from 'react'
import P from './components/P'
import H from './components/H'
import { withWindowDimensions } from './components/responsive'
import ReactPlayer from 'react-player'

function App({ isMobile }) {
  const logos = [
    { src: 'https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/PCR-Horizontal-Logo.png', alt: 'horizontal-logo' },
    { src: 'https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/TVP_Logo_Centered_Flame_Text_Tage_Black.png', alt: 'flame-logo' },
    { src: 'https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/full+logo+-+black+(1).png', alt: 'black-logo' },
    { src: 'https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/logo.jpg', alt: 'logo' },
  ]
  console.log('App loaded')

  return (
    <div className="flex flex-column justify-center tc mt6">
      <div className="flex justify-center">
      <img src="https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/Logo_Awaken+Logo.png" alt="awaken-logo" style={{ maxWidth: isMobile ? "300px" : "640px", maxHeight: isMobile ? "200px" : "360px" }}/>
      </div>
      <H className="mt5 ph1 b">“Even our soul itself becomes more beautiful when beauty meets us, takes holds of us, and fires us with enthusiasm.”</H>
      <H className="ph1 b">– Dietrich von Hildebrand</H>
      <P className="mt5">What Is Awaken:</P>
      <P className={`${isMobile ? "ph1" : "ph7"}`}>SEEK21 Participants from across the nation have answered the call to create in the chaos of 2020. With their music, art, and writing, these finalists of the Awaken 3.0 Competition have shared their gifts to give SEEK21 attendees the chance to see beauty as a bridge to the Divine, a window to encounter the Person of Christ. On behalf of the Beauty Initiative within FOCUS, Papercastle Records, and Love Good, we invite you to awaken to the mystery of Christ through Beauty.</P>
      <P className="mt5">How You Can Participate:</P>
      <P className={`${isMobile ? "ph1" : "ph7"}`}>Winners will be selected from each category by a panel of judges to win mentorships and publishing opportunities in their respective medium. Vote for your favorite artist in each medium by tapping the heart button! The winner will be featured as the “fan favorite” at the end of SEEK21.</P>
      <div className="flex justify-center mt5">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=byl_eLpb8K0"
        width={isMobile ? "100%" : "640px"}
        height={isMobile ? "240px" : "360px"}
        config={{
          youtube: {
            playerVars: {
              autoplay: 0,
              controls: 1,
            },
          },
        }}
        />
      </div>
      <H className="mt5 ph1 b">Awaken 3.0 Exhibit</H>
      <P className="ph1">We invite you to take a virtual walk through our collaborative digital exhibit to experience beauty during these days of SEEK21.</P>
      <div id="lp6-gallery" data-widget="gallery" data-contest="1" data-width="100%" data-height="1200" style={{ marginTop: '60px' }} className="lp6-widget-container"></div>
      <div className={`w-100 flex justify-center items-center colx-xs`} style={{ backgroundColor: "rgb(18, 81, 111)", height: isMobile ? "280px" : "150px" }}>
        <img src="https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/Awaken+3.0+book+.png" alt="book" style={{ width: "200px", height: isMobile ? "280px" : "150px" }} />
        <div>
          <P className="ph2" style={{ color: "white" }}>Sign up here to be notified when the printed book of Awaken content will be available for purchase!</P>
          <button className="mt3 pa3" style={{ backgroundColor: "white", border: "none", fontSize: "20px", fontFamily: "baskville" }}><a href="https://app.smartsheet.com/b/form/65a898de490f42de89d620d78609b43d" target="_blank" style={{ color: "black", textDecoration: "none" }}>GET THE AWAKEN BOOK</a></button>
        </div>
      </div>
      <H className="mt6 b">Thank You to Our Awaken Partners</H>
      <div className="row middle-xs">
          {logos.map((logo, i) => {
            const { src, alt } = logo
            return (
              <div className="col-xs-12 col-md-3" key={i}>
                <img src={src} alt={alt} />
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default withWindowDimensions(App)
