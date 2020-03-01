import React,{useState} from 'react';
import styled from "styled-components";
import {ReactComponent as Icon} from "../../../../assets/clerk.svg"
import {CommentInput, InputContainer} from "../../../../Styled Components/VideoPageStyle";


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
        <InputContainer onSubmit={getInput}> 
            <CommentInput type="text" cols="40" placeholder=" הוסף הערה ציבורית" ref={valueRef} />
            <UserIcon />
        </InputContainer>
    )
}

const UserIcon = styled(Icon)`
width: 5.5vh;
margin-left: 15px;
`;

export default Input;
