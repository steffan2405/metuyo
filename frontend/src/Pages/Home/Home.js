import React, { Component } from 'react';
import './Home.css'
import Avatar from './Avatar'
const API_URL="https://backend-dzfmupynzi.now.sh/"

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            diklik:false,
            data:[]
        }
    }
        async componentWillMount(){
        const RESPONSE = await fetch(API_URL)
        const DATA = await RESPONSE.json()
        console.log(DATA)
        this.setState({
        data:DATA
            }
        )
    }
    klik = () => {
        this.setState({
            diklik: !this.state.diklik,
        })
    }
render() {
    return (
        <div className="container home">
            {this.state.data.map(data => (
            <div key={data._id} className="home-body">
                <div className="home-layout">
                    <div className="home-avatar">
                        <Avatar/> 
                    </div>
                    <div className="home-content">
                        <div>
                            <h2 className="title">Title</h2>
                            <p className="title-content">{data.title}</p>
                            <h2 className="title">Locations</h2>
                            <p className="location-content">{data.location}</p>
                            <h2 className="title">Message</h2>
                            <p className="message-content">{data.message}</p>
                        </div>                        
                    </div>
                </div>
                <div className="home-button">
                    <button className="button-join" onClick={this.klik}>{this.state.diklik ? 'Join' : 'Not Join'}</button>
                </div>
            </div>
            ))}
        </div>
        );
    }   
}

export default Home;