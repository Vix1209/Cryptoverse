
import React from 'react';

//eslint-disable-next-line
import millify from 'millify';
// package to format our numbers

//eslint-disable-next-line
import { Typography, Row, Col, Statistic } from 'antd';

//eslint-disable-next-line
import { Link } from 'react-router-dom';

// redux toolkit for fetching real life data from www.rapidapi.com

import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';



const Homepage = () => {
//eslint-disable-next-line
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats

    console.log(data);
    if (isFetching){
        return <Loader />
    }

    return (
        <>
            <Typography.Title level={2} className='heading'>
                Global Crypto Stats
            </Typography.Title>
            <Row gutter={[32, 32]}>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={millify(globalStats.total)}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Markets' value={globalStats.Markets}/>
                </Col>
              
            </Row>
            <div className='home-heading-container'>
                <Typography.Title level={3} className='home-title'>
                    Top Cryptocurrencies in the World
                </Typography.Title>
                <Typography.Title level={5} className='Show more'>
                    <Link to='./cryptocurrencies'>Show more</Link>
                </Typography.Title>
                
            </div>
            <Cryptocurrencies simplified/>


            <div className='home-heading-container'>   
                <Typography.Title level={3} className='home-title'>
                    Latest Cryptocurrencies News
                </Typography.Title>
                <Typography.Title level={5} className='Show more'>
                    <Link to='./news'>Show more</Link>
                </Typography.Title>

            </div>
            <News simplified/>

        </>
    );


}

export default Homepage;
