import styled from 'styled-components';

export const List = styled.ul`
    --min: 30ch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    row-gap: 50px;
    column-gap: 29px;
`;