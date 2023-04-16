import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr auto;
    column-gap: 5rem;
    row-gap: 0;

    h2,h3,h4{
        color: white;
    }
`

export const Name = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 2rem;

    h2{
        color: white;
        font-size: 5rem;
        margin:0;

        background: linear-gradient(to right, #ff9332, #cac531);
        -webkit-background-clip: text;
        color: transparent;
    }
`

export const CoinLogo = styled.div`
    width: 5rem;
    margin-right: 1rem;
`

export const Logo = styled.img`
    width: 100%;
`

export const Info = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;

    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;


    border: 2px solid rgb(255, 147, 50);
    border-radius: 1rem;

    padding: 2rem 0;
`

export const Rank = styled.h2`
    grid-column: 1/3;
    grid-row: 1/2;
    width: 100%;
    text-align: center;
    margin: 0;
    padding-bottom: 2rem;
    font-size: 2rem;
    border-bottom: 2px solid rgb(255, 147, 50);
`

export const Value = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    :nth-child(2){
        grid-column: 1/2;
        grid-row: 2/3;
    }

    :nth-child(3){
        grid-column: 2/3;
        grid-row: 2/3;
    }

    h1,h2,h3,h4{
        color: white;
        margin: 0;
        font-size:1rem;
        width: 65%;
        text-align: center;
        margin-top: 1rem;
        
    }

    h1{
        font-size: 1.25rem;
        color: rgb(255, 147, 50);
        margin-bottom: 1rem;
        
    }

    h2{
        background-color: rgb(255, 147, 50);
        color: black;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
    }

    h4,h3{
        color: ${props => props.color.colorFont};
        background: ${props => props.color.background};
        padding: 0.5rem 0;
        border-radius: 1rem;
    }
`

export const ChartWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
`

export const Description = styled.div`
    grid-column: 1/3;
    grid-row: 3/4;
    border-top: 2px solid rgba(255, 147, 50,0.5);
    padding-top: 2rem;
    margin-top: 2rem;

    h2{
        margin: 0;
        color: rgb(255, 147, 50);
        font-size: 2rem;
    }

    p{
        text-align: justify;
        background: linear-gradient(to right, #ff9332, #cac531);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 1.25rem;
        line-height: 1.5;
        margin: 0;
        margin-top: 0.5rem;
    }
    a{
        color: rgba(255, 147, 50,1);
        text-decoration: none;

        &:hover{
            color: rgba(255, 147, 50,0.5); 
        }
    }

`