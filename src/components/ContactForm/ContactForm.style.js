import styled from "styled-components";

export const FormWrapper = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  background-color: #F7F7F7;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border: 3px solid rgb(17, 138, 203);;

  .total-price {
    align-self: center;
    font-size: 20px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

export const TextFieldStyles = {
  width: '90%',
  margin: '0.7rem auto',
}

export const SectionWrapper = styled.div`
  margin: 0.7rem 0 0 0.7rem;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  text-transform: capitalize;
`;

export const DatesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
