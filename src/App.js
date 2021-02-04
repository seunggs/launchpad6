import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.addEventListener('message', event => {
      console.log('post message event listener attached...')
      // IMPORTANT: check the origin of the data! 
      if (
        event.origin.startsWith('http://localhost:3000') ||
        event.origin.startsWith('https://focus.us.launchpad6.com') ||
        event.origin.startsWith('https://app.staging.secondstg.com') ||
        event.origin.startsWith('https://seek21.live')
      ) {
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        console.log(event.data);
      } else {
        // The data was NOT sent from your site! 
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
        return;
      }
    })
    window.parent.postMessage('foo','*')
  }, [])

  return (
    <div>
      <div id="lp6-gallery" data-widget="gallery" data-contest="1" data-width="100%" data-height="1200" style={{ marginTop: '60px' }} className="lp6-widget-container"></div>
    </div>
  )
}

export default App;
