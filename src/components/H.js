import React from 'react'

const H = ({ children, className = '' }) => (
  <div className={`lh-5 baskville ${className}`} style={{ fontSize: '30px' }}>{children}</div>
)

export default H