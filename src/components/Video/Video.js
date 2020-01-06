import React, { Component } from 'react'

export class Video extends Component {
    
    
    render() {
        return (
            <div className='video'> 
                <iframe width="400" height="300"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <h1>video title</h1> 
            </div>
        )
    }
} 
export default Video
