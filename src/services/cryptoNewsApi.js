import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/";

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': 'b837d37f6fmshdad246df1642aa0p18013djsn143a87ea09d0',
  'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news16.p.rapidapi.com/news/cointelegraph/'


  

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery ({baseUrl}),
    endpoints : (builder) => ({
      getCryptoNews: builder.query({
        
        query : ()=> createRequest()
      })
    })
  })
  


export const { useGetCryptoNewsQuery, } = cryptoNewsApi;

//when naming, make sure to have the 'use' and 'query' at the beginning an end

