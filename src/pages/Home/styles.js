import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled.div`
    width: 100%;
    text-align: center;
    position: relative;

    h3{
        color: white;
        font-size: 5rem;
        margin: 0;
        text-transform: uppercase;
    }

    h2{
        
        font-size: 5rem;
        margin: 0;
        text-transform: uppercase;
        background: linear-gradient(to right,#ff9332 , #cac531);
        -webkit-background-clip: text;
        color: transparent;
    }
`

export const Bitcoin = styled(motion.div)`
    width: 4.5rem;
    position: absolute;
    top:3rem;
    left: 4rem;

    img{
        width: 100%;
    }
`

export const Etherum = styled(motion.div)`
    width: 4.5rem;
    position: absolute;
    top:3rem;
    right: 4rem;

    img{
        width: 100%;
    }
`