import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    background-color: black;
    border-bottom: 2px solid rgba(255, 147, 50,0.5);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    z-index: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;


    @media screen and (min-width: 300px) and (max-width: 600px){
        padding: 1rem 2rem;
    }
`

export const Logo = styled(Link)`
    background: linear-gradient(to right, #ff9332, #cac531);
  -webkit-background-clip: text;
  color: transparent;
    font-size: 2rem;
    font-weight: bold;
`

export const NavButton = styled.button`
    color: #ff9332;
    background-color: black;
    border: none;
    padding:0;

    svg{
        font-size: 2rem;
    }

    @media screen and (min-width: 1200px){
        display: none;
    }
`

export const NavList = styled.div`

    @media screen and (min-width: 300px) and (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: left;


        position:absolute;
        top: calc(100% + 2px);
        right: 0;
        background: rgba(0,0,0,0.8);
        height :100vh;
        transition: width 0.5s ease;
        width:${props => props.width};
        overflow: hidden;
    }
`

export const NavItem = styled(NavLink)`
    color: #ff9332;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    transition: 0.5s ease;
    border-radius: 1rem;
    overflow: hidden;

    :hover{
        background-color: #ff9332;
        color: black;
    }

    :last-child{
        background-color: #ff9332;
        color: black;
        border: 1px solid #ff9332;

        :hover{
        background-color: black;
        color: #ff9332;
    }
    }

    @media screen and (min-width: 300px) and (max-width: 600px){
        font-size: 2rem;
        margin: 2rem;
        text-align: left;
    }
`
