import React, { Component } from "react"
import PhoneScreen from "../components/phonescreen"
import AboutMe from "../components/aboutme"
import AppDetailsCorsa from "../components/appdetailscorsa"
import AppDetailsRaco from "../components/appdetailsraco"
import Cursor from "../components/cursor"
import Header from "../components/header"
import IndexStyles from "../styles/index.module.scss"
import { Blob } from "react-blob"
import {RotateScale} from 'styled-loaders-react'
import Helmet from "react-helmet";

class App extends Component{
  
  state = {
    loading: true
  }

  componentDidMount = () => {
    document.title = "Salim Bouhorma Mouffak"
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 1500)
  }
    
  render(){
    return <div className ={IndexStyles.div}>
            <Helmet>
            <meta name="description" content="Hi there! Check out some of my cool projects!"/>
            <meta name="keywords" content="portfolio, projects, computer science, upc, salim bouhorma"/>  
            <meta property="og:title" content="Salim Bouhorma Mouffak" />
            <meta property="og:description" content="Hi there! Check out some of my cool projects!" />
            <meta property="og:image" content="/preview.png" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://vibrant-brown-f2f2ee.netlify.app" />
            <link rel="canonical" content="https://vibrant-brown-f2f2ee.netlify.app" />
            </Helmet>
            {
              this.state.loading ? <RotateScale size = "400px" color="#20356B"/> :
                  <>
                <Cursor />
                <section className ={IndexStyles.section}>
                <Header/>
                <Blob size="1900px"
                      style={{
                        position: 'absolute',
                        top: '0%',
                        left: '30%',
                        zIndex: -1,
                        backgroundColor: 'white',
                        color: 'white',
                        opacity: 0.5,
                        fontSize: '50vh',
                      }}
                      animationDuration="60s"
                />
                <AboutMe/>
                <PhoneScreen/>
                <AppDetailsCorsa/>
                <PhoneScreen source="corsa"/>
                </section>
              </>
            }

      </div>
    
  };

}

export default App



