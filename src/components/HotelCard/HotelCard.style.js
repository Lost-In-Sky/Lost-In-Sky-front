import styled from "styled-components";

const CardContainr = styled.div(({ hoverShadow }) => `
display:flex;
flex-direction:column;
width:18rem;
border: 1px solid blue;
height:23rem; 
box-shadow: none;
transition: box-shadow 0.3s ease-in-out;
justify:content:center;

:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)
}
`);

const TestImageImutator = styled.div(({ showShadow }) => `
width:100%;
display:flex;
justify-content:center;
height:10rem;
background-color: ${showShadow ? "red" : "blue"};
padding-top:2rem;
box-shadow: none;
transition: box-shadow 0.3s ease-in-out;
:hover{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5)
}    
`);

export { CardContainr, TestImageImutator }