import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
  'X-RapidAPI-Key': 'b837d37f6fmshdad246df1642aa0p18013djsn143a87ea09d0',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com' 
}


const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery ({baseUrl: 'https://coinranking1.p.rapidapi.com'}),
  endpoints : (builder) => ({
    getCryptos: builder.query({
      query : (count)=> createRequest(`/coins?limit=${count}`)
      // this endpoint 'coins' will give us more information about all cryptocurrencies 
    }),


    getCryptoDetails: builder.query({
      query : (coinId)=> createRequest(`/coin/${coinId}`),
      // we get coinId from the routes, as that is where we stated the routing for cryptodetails
    }),

    // getExchanges: builder.query({
    //   query : ()=> createRequest(`/exchanges  `)

    // }),

    getCryptoHistory: builder.query({
      query : ({ coinId, timePeriod })=> createRequest(`/coin/${coinId}/history/${timePeriod}`),
      // we get coinId from the routes, as that is where we stated the routing for cryptodetails
    }),
  })
})


export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, //useGetExchangesQuery //when naming, make sure to have the 'use' and 'query' at the beginning an end of the name of the endpoint
} = cryptoApi;
// above  is a hook created by redux toolkit that can be called instantly to get all the data for a query

