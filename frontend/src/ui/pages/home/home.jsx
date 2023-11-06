import React from 'react'
import HomeTab from './components/hometap'
import Navbar from '../../modules/components/navbar.jsx'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userId:'',
    }
  }
  componentDidMount() {
    console.log(window.localStorage.getItem('auth_user'))
  }

  render() {
    return (
      <>
        <Navbar />
        <HomeTab />
      </>
    )
  }
}

export default Home
