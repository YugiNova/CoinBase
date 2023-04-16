import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointScale,
    PointElement
} from 'chart.js'
import { Container } from "./styles";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const CoinDetailChart = ({coinData}) => {
    const labels = coinData.map((item,index) => {
        if(index % 12 === 0)
            return index/12 + "h";
        else return " "
    })
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Price",
            data: coinData, 
            fill: false,
            borderColor: "#ff9332",
            tension: 0,
            pointBorderWidth: 0,
            backgroundColor: "transparent"
          },
        ],
      };

    const options = {
        responsive: true,
        plugins: {
            legend: false
        },
        responsive:true,
        scales: {
            x: {
                grid: {
                    display: true,
                    color: "rgba(255, 147, 50, 0.4)"
                },
                ticks: {
                    display: true,
                    color: "white"
                }
            },
            y: {
                grid: {
                    display: true,
                    color: "rgba(255, 147, 50, 0.4)"
                },
                ticks: {
                    display: true,
                    color: "white"
                }
            }
        }
    }

    return(
        <Container>
            <Line data={data} options={options}></Line>
        </Container>
    )
}

export default CoinDetailChart;