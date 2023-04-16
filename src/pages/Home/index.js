import CoinData from "../../components/CoinData";
import Layout from "../../layouts/PublicLayout"
import { Bitcoin, Etherum, Title } from "./styles";
import bitcoin from "../../assets/bitcoin.png";
import etherum from "../../assets/etherum.png"

const Home = () => {
    const CoinVariants = {
        move:{
            y: [-10,10,-10],
            transition: {
                repeat: Infinity,
                type: 'ease',
                duration: 1
            }
        }
    }

    return(
        <Layout>
            <Title>
                <Bitcoin variants={CoinVariants} animate='move'><img src={bitcoin}/></Bitcoin>
                <Etherum  variants={CoinVariants} animate='move'><img src={etherum}/></Etherum>
                <h3>track and trade</h3>
                <h2>crypto currencies</h2>
            </Title>
            <CoinData/>
        </Layout>
    )
}

export default Home;