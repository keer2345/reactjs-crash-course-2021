import React from 'react'

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title} Task Tracker</h1>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

export default Header
