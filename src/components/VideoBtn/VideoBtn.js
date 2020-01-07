import React from 'react';

class VideoBtn extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.action}>{this.props.likeNum}</button>
            </div>
        )
    }
}

export default VideoBtn
