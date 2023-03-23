import React from 'react';
// import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js'

//   import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  )
const { Title } = Typography



const Linechart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice = []
    const coinTimestamp = []

    // looping through the coin history to get the particular details of each coin below
    for (let i = 0; i < coinHistory?.data?.history?.length; i+= 1) {
        coinPrice.push(coinHistory?.data?.history[i].price)   //this pushes wch of the price of each coin into the coinPrice array
        

    }
    for (let i = 0; i < coinHistory?.data?.history?.length; i+= 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())      //this pushes wch of the price of each coin into the coinPrice array
    }



    // 👇🏾 This is the code base for the line chart showing the price action and history of particular coins... yet to be fixed totally
    // const data = {
    //     labels : coinTimestamp,
    //     datasets : [
    //         {
    //             label : 'Price in USD',
    //             data : coinPrice,
    //             fill : false, 
    //             backgroundColor : '#0071bd',
    //             borderColor : '#0071bd',
    //         }
    //     ]
    // }

    // const options = {
    //     scales : {
    //         yAxes : [
    //             {
    //                 ticks : {
    //                     beginAtZero : true,
    //                 }
    //             }
    //         ]
            
    //     }
    // }


    return (
        <>
            <Row className='chart-header'>

            {/* title not necessary */}
                {/* <Title level={2} className = 'chart-title'>
                    {coinName} Price Chart
                </Title> */}
                <Col className='price-container'>

                {/* there seems to be an issue here... so look into it later */} 
                     {/* <Title level={5} className='price-change'>

                        Change: {coinHistory?.data?.change}%    
                       
                    </Title> */}
                    
                    <Title level={5} className='current-price'>
                        Current {coinName} Price: ${currentPrice}
                    </Title>
                </Col>
            </Row>
            
            {/* 👇🏾line chart declaration */}
            {/* <Line data={data} options={options} /> */}
        </>
    );
}

export default Linechart;
 