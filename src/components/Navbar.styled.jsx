import styled from 'styled-components';

export const NavBarWrapper = styled.div`
    background-color: lightblue;
    padding: 20px 20px;
    box-sizing: border-box;
    display: flex;
`;

export const NavBarText = styled.div`
    flex-grow:1;
`

export const Button = styled.button`
	margin-left: 20px;
    padding: 5px 30px;
    cursor: pointer;
`;

NavBarWrapper.displayName = 'NavBarWrapper';