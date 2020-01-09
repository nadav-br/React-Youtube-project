import React, { Component } from 'react'
import './SideVideoList.css'

class SideVideoList extends Component {
    constructor() {
        super()
        this.state= {
            videoslist: []
        }
    }

    componentDidMount() {
        fetch('/api/videosList')
        .then(res => res.json())
        .then(videoslist => this.setState({videoslist}))
    }
    render() {        
        return (
            <div>                
                    {this.state.videoslist.map(video => {
                       return (
                       <div key={video.id}>                                                     
                           <iframe width="200" height="150" src={video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           <p>{video.name}</p>
                       </div> 
                       )
                    }
                    )}            
            </div>
        )
    }
}

export default SideVideoList

