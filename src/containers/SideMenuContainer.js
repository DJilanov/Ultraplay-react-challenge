import { connect } from 'react-redux'
import SideMenu from '../components/SideMenu'

const mapStateToProps = state => ({
  sports: state.sports
})

export default connect(
  mapStateToProps
)(SideMenu)
