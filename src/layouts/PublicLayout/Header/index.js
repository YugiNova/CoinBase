import { Container, Logo, NavItem, NavList } from "./styles"


const Header = () => {

    return(
        <Container>
            <Logo to={"/"}>CoinBase</Logo>
            <NavList>
                <NavItem>Market</NavItem>
                <NavItem>Choose Us</NavItem>
                <NavItem>Dashboard</NavItem>
            </NavList>
        </Container>
    )
}

export default Header;