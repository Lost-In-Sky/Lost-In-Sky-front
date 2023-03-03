import styled from "styled-components";

export const CardWrapper = styled.div`
margin-top:4rem;
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:space-around;
width:100vh
height:20rem;
>div{
    margin-right:4rem;
    @media(max-width:599px){
        margin-right:unset;
        margin-top:3rem;
}
}

`

export const MainWrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column


;`