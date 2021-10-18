import styled from "styled-components";

export const Page = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`

export const TextInput = styled.input`
    width:50%;
    padding-left:10px;
    border:1px solid black;
    margin-bottom:20px;
    height:50px;
    border-radius:5px;
`

export const Button = styled.button`
    width:100px;
    height:30px;
    background-color:${props => props.color};
    border:1px solid ${props => props.borderColor};
    border-radius:5px;
    margin-left:20px;
    cursor:pointer;
`

export const Label = styled.label`
    font-size:16px;
    font-weight:bold;
    margin-bottom:20px;
`

export const Card = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    margin-top:20px;
`

export const CardHeader = styled.div`
    width:600px;
    height:50px;
    border:1px solid black;
    border-radius:2px;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const CardBody = styled.div`
    width:600px;
    height:100px;
    border:1px solid gray;
    border-radius:2px;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const CardFooter = styled.div`
    width:600px;
    height:50px;
    border:1px solid gray;
    border-radius:2px;
    text-align:center;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`