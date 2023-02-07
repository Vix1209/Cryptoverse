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

const Homepage = () => {
//eslint-disable-next-line
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats

    console.log(data);
    if (isFetching){
        return 'Loading...'
    }

    return (
        <>
            <Typography.Title level={2} className='heading'>
                Global Crypto Stats
            </Typography.Title>
            <Row>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={globalStats.total}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Exchanges' value={globalStats.totalExchanges}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap' value={globalStats.totalMarketCap}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total 24h Volume' value={globalStats.total24hVolume}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Markets' value={globalStats.Markets}/>
                </Col>
              
            </Row>
        </>
    );


}

export default Homepage;
