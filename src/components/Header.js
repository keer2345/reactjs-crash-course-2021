import PropTypes from 'prop-types'

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

Header.protoType = {
  title: PropTypes.string.isRequired
}

export default Header
