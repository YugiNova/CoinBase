import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
    display:grid;
    grid-template-columns: 4rem 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    justify-items: start;
    align-items: center;

    border: 1px solid #ff9332;
    border-radius: 1rem;
    padding: 1rem 1rem;
    background-color: black;
    color: white;

    text-decoration: none;
`

export const Image = styled.img`
    grid-column: 1/2;
    grid-row: 1/3;
    width: 100%;
`

export const Name = styled.h2`
    grid-column: 2/4;
    grid-row: 1/2;
    font-size: 1rem;
    margin: 0;
    color:#ff9332;
    font-size: 1.5rem;
`


export const Price = styled.h2`
    grid-column: 2/3;
    grid-row: 2/3;
    font-size: 1rem;
    margin: 0;
`

export const Change = styled.h2`
    grid-column: 3/4;
    grid-row: 2/3;
    font-size: 1rem;
    margin: 0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    color: ${props => props.color.colorFont};
    background: ${props => props.color.background};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg{
        margin-right: 5px;
    }
    
`