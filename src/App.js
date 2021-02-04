import React, { useEffect } from 'react'
import P from './components/P'
import { withWindowDimensions } from './components/responsive'
import ReactPlayer from 'react-player'

function App({ isMobile }) {
  const logos = [
    { src: 'https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/PCR-Horizontal-Logo.png', alt: 'horizontal-logo' },
    { src: 'https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/TVP_Logo_Centered_Flame_Text_Tage_Black.png', alt: 'flame-logo' },
    { src: 'https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/full+logo+-+black+(1).png', alt: 'black-logo' },
    { src: 'https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/logo.jpg', alt: 'logo' },
  ]

  return (
    <div className="container-main">
      <div className="row">
        <div className="col-xs-12">
          <div className="f2 lh-2 mb4 tc">AWAKEN</div>
          <P className="b">“Even our soul itself becomes more beautiful when beauty meets us, takes holds of us, and fires us with enthusiasm.” – Dietrich von Hildebrand</P>
          <div className={`flex ${isMobile ? "flex-column" : ""} mv5`}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=byl_eLpb8K0"
              width={isMobile ? "100%" : "640px"}
              height={isMobile ? "100%" : "360px"}
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 0,
                    controls: 1,
                  },
                },
              }}
            />
            <P className={`ph5 ${isMobile ? "pt4" : ""}`} style={{ flex: 3 }}>SEEK21 Participants from across the nation have answered the call to create in the chaos of 2020. With their music, art, and writing, these finalists of the Awaken 3.0 Competition have shared their gifts to give SEEK21 attendees the chance to see beauty as a bridge to the Divine, a window to encounter the Person of Christ. On behalf of the <a href="https://seek21.live/categories/sponsor/learn-more-about-focus/a-beauty-initiative-within-focus-1">Beauty Initiative within FOCUS</a>, <a href="https://seek21.live/categories/sponsor/faith-formation/the-vigil-project-papercastle-records">Papercastle Records</a>, and Love Good, we invite you to awaken to the mystery of Christ through Beauty.</P>
          </div>
          <P>Winners will be selected from each category by a panel of judges to win mentorships and publishing opportunities in their respective medium. Vote for your favorite artist in each medium by tapping the heart button! The winner will be featured as the “fan favorite” at the end of SEEK21.</P>
          <br />
          <P className="b">We invite you to take a virtual walk through our collaborative digital exhibit to experience beauty during these days of SEEK21.</P>
          <br />
          <div className="flex items-center">
            <div style={{ maxWidth: "190px", maxHeight: "142px" }}>
              <img src="https://second-stage.s3.amazonaws.com/clients/focus/2021/awaken/Awaken+3.0+book+.png" className="pr3 w-100" />
            </div>
            <a href="https://app.smartsheet.com/b/form/65a898de490f42de89d620d78609b43d"><P>Sign up here to be notified when the printed book of Awaken content will be available for purchase!</P></a>
          </div>
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
      </div>

      <div id="lp6-gallery" data-widget="gallery" data-contest="1" data-width="100%" data-height="1200" style={{ marginTop: '60px' }} className="lp6-widget-container"></div>
    </div>
  )
}

export default withWindowDimensions(App)
