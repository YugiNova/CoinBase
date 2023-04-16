import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    position: relative;
    height: auto;


`

export const SearchCoins = styled.input`
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem;
    color:#ff9332;
    border: 1px solid rgba(255, 147, 50,0.5);
    border-radius: 1rem;
    background-color: black;
    margin: 1rem 0;
    transition: 0.25s ease;
    
    

    :active{ 
        outline: none;
    }

    :focus{ 
        outline: none;
        border: 1px solid rgba(255, 147, 50,1);
    }

    &:not(:placeholder-shown) + h2,
    &:focus + h2 {
        top: 20%;
        padding: 0 1rem;
        color: rgba(255, 147, 50,1);
    }

    ::before{
        
    }
`

export const Placeholder = styled.h2`
        position: absolute;
        color: rgba(255, 147, 50,0.5);
        background-color: black;
        width: auto;
        height: auto;
        margin: 0;
        top: 50%;
        left: 1rem;
        transform: translateY(-61%);
        font-size: 1rem;
        transition: 0.25s ease;
        pointer-events: none;
`