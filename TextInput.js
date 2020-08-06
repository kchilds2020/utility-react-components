import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const TextInput = ({phText='', value='', setValue = () => null, label='none', minLength='0', maxLength='1000' }) => {
    const [id, setID] = useState('')

    useEffect(() => {
        setID(`${Math.floor((Math.random() * 10000) + 1)}`)
    },[])
    
    return (
        <Container>
            {label === 'left' ? (
                <FDRow>
                    <Label htmlFor={id}>Label</Label>
                    <Input 
                        id={id}
                        type = 'text'
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                    />  
                </FDRow>
            ) : label === 'top' ? (
                <FDCol>
                    <Label htmlFor={id}>Label</Label>
                    <Input 
                        id={id}
                        type = 'text'
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                    />   
                </FDCol>
            ) :  
                <Input 
                    id={id}
                    type = 'text'
                    placeholder = {phText}
                    value = {value}
                    onChange = {(e) => setValue(e.target.value)}
                    minLength={minLength}
                    maxLength={maxLength}
                />}
        </Container>        
    )
}

const Container = styled.div`
    width: 95%;    
    padding: 0px;
    margin: 5px auto;
`

const FDRow = styled.div`
    display: flex;
    align-items: center;
`

const FDCol = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    font-size: 18px;
    width: 100%;
    padding: 5px;
    margin: 0px;
    border: #ddd 1px solid;
    background-color: white;

    :focus {
        outline: none;
    }

`

const Label = styled.label`
    font-size: 18px;
    margin-right: 5px;
`

export default TextInput
