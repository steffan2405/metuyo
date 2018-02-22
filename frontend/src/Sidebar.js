import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import {blue500, cyan500} from 'material-ui/styles/colors';
import HomeStyle from 'material-ui/svg-icons/action/home';
import ActionAssigment from 'material-ui/svg-icons/action/assignment';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionCreate from 'material-ui/svg-icons/action/code';

import { NavLink } from 'react-router-dom'

import Paper from 'material-ui/Paper';

const PaperStyle = {
    backgroundColor: cyan500,
    height: 200,
    padding: 0
  
  };
  
  const ImageStyle = {
    width: 200,
    margin: 20
  
  };


const logo = require ('./image/putih.png');



injectTapEventPlugin();
  

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
          drawerOpened: false
        }
      }
      _toggleDrawer () {
        this.setState({
          drawerOpened: !this.state.drawerOpened
        });
      }

      link = [       
        {'link': '/home', 'text': 'Home', 'icon':<HomeStyle/> },
        {'link': '/profile', 'text': 'Profile', 'icon':<ActionAccountCircle/> },        
        {'link': '/new-learning', 'text': 'New', 'icon':<ActionCreate/> },

      ]
      

    render() {
      const list = 
        this.link.map((data, i) => {
          return (
            <List key={i}>
              <NavLink to={data.link}>
                <ListItem
                  primaryText={data.text}
                  leftIcon={data.icon}
                  colors={<blue500 />} />
              </NavLink>
            </List>
          )
      })
    
      
        return (
            <MuiThemeProvider>
            <div>
            <AppBar title="Metuyo" onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
              <Drawer  open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>
    
                <List style={{padding: 0}}>
                  <Paper style={PaperStyle} zDepth={0}>
                    <center>  <img src={logo} alt="logo" style={ImageStyle} /> </center>
                    </Paper>
                </List>

                {list}

    
              </Drawer>
            </div>
          </MuiThemeProvider>
        )
    }
} 

export default Sidebar;