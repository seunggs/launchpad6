import React from 'react'

const P = ({ children, className = '' }) => (
  <div className={`lh-5 baskville ${className}`} style={{ fontSize: '18px' }}>{children}</div>
)

export default P