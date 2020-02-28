import React,{useState} from 'react'

function Input(props) {
    let valueRef = React.createRef();
    const [inputVal, setInputVal] = useState(valueRef);
    
    const getInput = e => {
        e.preventDefault();
        props.addComment(valueRef.current.value);
        console.log("valueRef",valueRef.current.value);
        valueRef.current.value = '';
    }
    
    
    return (

            <form onSubmit={getInput}>         
                <input type="text" ref={valueRef} />
            </form>
    )
}

export default Input
