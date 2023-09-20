import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background-color: rgba(18, 20, 23, 0.50);
    z-index: 1200;
`;

export const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 541px;
    /* height: 752px; */
    background-color: #FFFFFF;
    border-radius: 24px;
    padding: 40px;
`;

export const BattonClose = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`;