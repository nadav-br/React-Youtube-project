import React,{useState} from 'react';
import {  
    CommentInput
  } from "../../../../Styled Components/VideoPageStyle";


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
                <CommentInput type="text" cols="40" placeholder=" הוסף הערה ציבורית" ref={valueRef} />
            </form>
    )
}

export default Input;
