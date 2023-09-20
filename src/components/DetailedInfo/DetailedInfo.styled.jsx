import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const Image = styled.img`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border-radius: 14px;
    background-color: #F3F3F2; 
    object-fit: cover;
`;

export const Title = styled.div`
    color: #121417;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
`;

export const Info = styled.div`   
    color: rgba(18, 20, 23, 0.50);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
`;

export const Description = styled.p`
    color: #121417;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;
`;

export const SecondTitle = styled.h4`
    color: #121417;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.43;
    margin-bottom: 8px;
`;

export const ConditionsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Conditions = styled.span`
    display: flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    border-radius: 35px;

    color: #363535;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.24px;
`;