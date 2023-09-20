import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 136px;
    height: 48px;
  `,
  medium: css`
    padding: 12px 50px;
    align-self: flex-start;
  `,
  large: css`
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
  `,
};

export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;   
    color: #FFFFFF;
    background-color: #3470FF;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 12px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    
    cursor: pointer;
    
    &:hover,
    &:focus {
        background-color: #0B44CD;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }

     ${(props) => sizes[props.size]}
`;

export const LoadMoreButton = styled.button`
    display: flex;
    border: none;
    background-color: transparent;
    color: #3470FF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;

    cursor: pointer;

    &:hover,
    &:focus {
        color: #0B44CD;
    }
`;