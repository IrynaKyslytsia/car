import styled from "styled-components";


export const SidebarWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 18px;
    margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
    border-radius: 14px;
    overflow: hidden;
`;

export const Input = styled.input`
    width: 160px;
    height: 48px;
    background-color: #F7F7FB;
    border: none;
    outline: none;
    padding-left: 8px;
`;

export const InputLeft = styled(Input)`
    border-right: 1px solid rgba(138, 138, 137, 0.20)  
`;

export const InputTitle = styled.span`
    display: inline-block;
    color: #8A8A89;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.29;
    margin-bottom: 8px;
`;