import React from 'react'

function Input(props) {
    let valueRef = React.createRef();
    const getInput = e => {
        e.preventDefault();
        // console.log(valueRef.current.value);
        props.addComment(valueRef.current.value);

    }
    return (

            <form onSubmit={getInput}>         
                <input type="text" ref={valueRef} />
            </form>
    )
}

export default Input
