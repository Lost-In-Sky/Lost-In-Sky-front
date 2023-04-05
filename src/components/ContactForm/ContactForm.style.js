import styled from "styled-components";

export const FormWrapper = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 500px;

  .total-price {
    align-self: center;
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TextFieldStyles = {
  width: '90%',
  margin: '0.7rem auto',
}

export const SectionWrapper = styled.div`
  margin: 0.7rem 0 0 0.7rem;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
`;

export const DatesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
