import React, {useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
import { Card, Row, Col, Input } from 'antd';

import Loader from './Loader'

import { useGetCryptosQuery } from '../services/cryptoApi';

// simplified is passed down in the argument using Prop
const Cryptocurrencies = ({simplified}) => {
    // if simplified, count = 10, else = 100 
    const count = simplified ? 10 : 100


    // eslint-disable-next-line 
    const {data:cryptoList, isFetching} = useGetCryptosQuery(count);
     
    // it is an array not object, hence use block brackets
    // eslint-disable-next-line
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    console.log(cryptos);
    
    // this allows for the funtion to be executed whenever the cryptoList or searchTerm changes
    useEffect(() => {

        //the variable filteredData below will allow us to search for a particular coin in the long line of 100 cryptocurrencies
        const filteredData = cryptoList?.data?.coins.filter(
            (coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        setCryptos(filteredData)

    }, [cryptoList, searchTerm])

    if (isFetching){
        return <Loader />
    }

    return (
       <>
        {/* to filter cryptocurrencieswe wish to search for */}
            {/* to make sure the search bar is removed from the homepage  */}
            {!simplified && (
                <div className='search-crypto'>
                    <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />

                </div>
            )}


            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency)=>(

                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
                        <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
                            <Card  
                                title={`${currency.rank}. ${currency.name}`} 
                                extra={<img className='crypto-image' src={currency.iconUrl} alt='' />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>          
       </>
    );
}

export default Cryptocurrencies;


// changed {currency.id} to {currency.uuid} 
// when reading from objects attributes either for arrays or objects, like mapping, instead of a '.' use '?.' 
