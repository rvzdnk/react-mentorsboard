import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const ListContainer = styled.div`
	margin: 20px 0 20px 0;
	height: 100%;
`;

export const List = styled.ul`
    list-style:none;
    display: flex;
    flex-wrap: wrap;
	justofy-content: center;
	align-items: center;
    margin: -20px 0 0 -20px;
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
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const AdvertsTitle = styled.h3`
	margin: 0 0 10px 0;
`

export const AdvertsRedirect = styled.a`
	cursor: pointer;
	margin: 0 0 10px 0;
	display: flex;
	align-items: center;
`

export const StyledReactPaginate = styled(ReactPaginate)`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: space-evenly;
	margin: 20px 0 20px 0;
	> * {
		margin: 0 4px;
		text-align: center;
		cursor: pointer;
	}
	> *:not(:first-child):not(:last-child){
		width: 25px;
		height: 25px;
		border: 1px solid;
		border-radius: 50%;
	}
	.active{
		background-color: grey;
	}

`