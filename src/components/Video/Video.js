import React, { Component } from 'react'

export class Video extends Component {
    
    
    render() {
        return (
            <div className='video'> 
                <iframe width="500" height="800"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <h1>video title</h1> 
            </div>
        )
    }
}
export default Video
