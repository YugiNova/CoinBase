import Footer from "./Footer";
import Header from "./Header";
import { Layout, Main } from "./styles";


const PublicLayout = ({children}) => {

    return(
        <Layout>
            <Header />
            <Main>
             {children}
            </Main>
            <Footer/>
        </Layout>
    )
}

export default PublicLayout;