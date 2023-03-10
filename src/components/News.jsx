import React from 'react';

// eslint-disable-next-line
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';

// eslint-disable-next-line
import moment from 'moment/moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

// eslint-disable-next-line
const { Text, Title } = Typography

// eslint-disable-next-line
const { Option }= Select

const demoImage = 'https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({simplified}) => {
    const count = simplified ? 6 : 12;
    const {data : cryptoNews, isFetching } = useGetCryptoNewsQuery(count)
    if (isFetching){
        return 'Loading...'
    }
    // const {data : cryptoNews } = useGetCryptoNewsQuery()
    console.log(cryptoNews);

    return (

        <div>       
           
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptoNews?.map((news, i)=>(

                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card className='news-card'>
                            <a href={news.url} target='_blank' rel='noreferrer'>
                                <div className='news'>
                                    <Title className='news-title' level={5}>
                                        {news.title}
                                    </Title>
                                    <img  src={demoImage} />
                                </div>
                                <p>
                                    {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                </p>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>          

        </div>
    );
}

export default News;
