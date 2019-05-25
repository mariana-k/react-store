import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background:transparent;
    border: 0.05rem solid var(--lightGrey);
    border-color: ${props=> 
        props.cart? "var(--mainGrey)":"var(--lightGrey)"
    }
    color: ${prop=> 
        prop.cart? "var(--mainGrey)": "var(--lightGrey)"
    }
    border-radius: 05rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
    background: ${prop=>
        prop.cart? "var(--mainGrey)":"var(--lightGrey)"}
    color: var(--mainPurple);
    }
    &:focus{
    outline: none;
    }
`