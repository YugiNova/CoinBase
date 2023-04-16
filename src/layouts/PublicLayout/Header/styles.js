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
`

export const Logo = styled(Link)`
    background: linear-gradient(to right, #ff9332, #cac531);
  -webkit-background-clip: text;
  color: transparent;
    font-size: 2rem;
    font-weight: bold;
`

export const NavList = styled.div`

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
`
