import React from 'react';
// eslint-disable-next-line
import { Switch, Route, Link} from 'react-router-dom'
// eslint-disable-next-line
import { Layout, Typography, Space } from 'antd'
import {Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails} from './components'
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch> 
                        {/* the switch allows us to have mulltiple routes  */}
                            <Route exact path='/'>
                            {/* this allows us to route to an exact location */}

                                <Homepage />
                                {/* this is the component you wish to rout   */}

                            </Route>

                            <Route exact path='/exchanges'>
                            {/* this allows us to route to an exact location */}

                                <Exchanges />
                                {/* this is the component you wish to rout   */}

                            </Route>

                            <Route exact path='/cryptocurrencies'>
                            {/* this allows us to route to an exact location */}

                                <Cryptocurrencies />
                                {/* this is the component you wish to rout   */}

                            </Route>

                            <Route exact path='/crypto/:coinid'>
                            {/* this allows us to route to an exact location */}

                                <CryptoDetails />
                                {/* this is the component you wish to rout   */}

                            </Route>

                            <Route exact path='/news'>
                            {/* this allows us to route to an exact location */}

                                <News />
                                {/* this is the component you wish to rout   */}

                            </Route>
                        </Switch>
                    </div>

                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                        Cryptoverse <br/>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
   
    );
}

export default App;
