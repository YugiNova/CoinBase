import { useState } from "react"
import { Container, Logo, NavButton, NavItem, NavList } from "./styles"
import {MenuOutlined} from '@ant-design/icons'


const Header = () => {
    const [navWidth, setNavWidth]= useState("0");

    const toggleNav = () => {
        if(navWidth === 0){
            setNavWidth("16.5rem")
        }
        else{
            setNavWidth(0)
        }
    }

    return(
        <Container>
            <Logo to={"/CoinBase"}>CoinBase</Logo>
            <NavList width={navWidth}>
                <NavItem to={"/CoinBase"}>Market</NavItem>
                <NavItem>Detail</NavItem>
                <NavItem>Dashboard</NavItem>
            </NavList>
            <NavButton onClick={toggleNav}><MenuOutlined /></NavButton>
        </Container>
    )
}

export default Header;