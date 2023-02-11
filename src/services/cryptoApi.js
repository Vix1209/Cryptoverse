import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
//eslint-disable-next-line
import { Cryptocurrencies } from '../components'

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
    })
  })
})


export const {
  useGetCryptosQuery, //when naming, make sure to have the 'use' and 'query' at the beginning an end 
} = cryptoApi;
// above  is a hook created by redux toolkit that can be called instantly to get all the data for a query

