import React from 'react';

// eslint-disable-next-line
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';

// eslint-disable-next-line
import moment from 'moment/moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

// eslint-disable-next-line
const { Text, Title } = Typography

// eslint-disable-next-line
const { Option }= Select

const demoImage = 'https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({simplified}) => {
    const count = simplified ? 6 : 12;
    const {data : cryptoNews, isFetching } = useGetCryptoNewsQuery(count)
    if (isFetching){
        return <Loader />
    }
    console.log(cryptoNews);

    return (

        <div>       
           
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptoNews?.map((news, i)=>(

                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card className='news-card' hoverable>
                            <a href={news.url} target='-blank' rel='noreferrer'>
                                <div className='news-image-container'>
                                    <Title className='news-title' level={4}>
                                        {news.title}
                                    </Title>
                                    {/* <img style={{maxWidth : '200px', maxHeight : '100px'}} src={demoImage}  alt= ''/> */}
                                </div>
                                <p>
                                    {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                </p>
                                <div className='provider-container'>
                                    
                                    <Avatar src = {demoImage} alt='' />
                                    
                                    <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>          

        </div>
    );
}

export default News;
