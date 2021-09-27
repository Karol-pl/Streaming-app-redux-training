import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  & label {
    padding: 0 10px;
    color: #060d47;
    font-weight: 600;
  }

  & input {
    padding: 5px 70px;
    border: none;
    border-bottom: 1px solid #060d47;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  width: 100%;
  max-width: 500px;
`;
