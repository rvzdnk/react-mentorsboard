import styled from "styled-components";

export const ListContainer = styled.div`
	margin: 20px 0 20px 0;
`;

export const List = styled.ul`
    list-style:none;
    display: flex;
    flex-wrap: wrap;
	justofy-content: center;
	align-items: center;
    margin: -10px -10px 0 0;
    padding: 0;
`;

export const Message = styled.p`
    font-size: 1.2rem;
    text-align: center;
`;

export const AdvertsWrapper = styled.div`
	 display: flex;
	 flex-direction: column;
	 align-items: center;
`

export const AdvertsBar = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 10px 0 10px 0;
`

export const AdvertsTitle = styled.h3`
	margin: 0 10px 0 0;
`

export const AdvertsRedirect = styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
`