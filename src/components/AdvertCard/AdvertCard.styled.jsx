import styled from 'styled-components';

export const Card = styled.li`
    position: relative;
`;

export const Image = styled.img`    
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    max-width: 100%;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;   
`;

export const FavoriteButton = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`;

export const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    color: #121417;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
`;

export const CardInfo = styled.div`
    margin-bottom: 28px;
    color: rgba(18, 20, 23, 0.50);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`;

