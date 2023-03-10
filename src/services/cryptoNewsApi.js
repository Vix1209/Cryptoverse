import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/";

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': 'b837d37f6fmshdad246df1642aa0p18013djsn143a87ea09d0',
  'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news16.p.rapidapi.com/news/'


  

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery ({baseUrl}),
    endpoints : (builder) => ({
      getCryptoNews: builder.query({
        // query : ({count})=> createRequest(`/coins?limit=${count}`  `/100?limit=${count})
        query : (count)=> createRequest( `/cointelegraph?limit = ${count}`)
      })
    })
  })
  


export const { useGetCryptoNewsQuery, } = cryptoNewsApi;

//when naming, make sure to have the 'use' and 'query' at the beginning an end





// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://crypto-news16.p.rapidapi.com/news/top/100',
//   headers: {
//     'X-RapidAPI-Key': 'b837d37f6fmshdad246df1642aa0p18013djsn143a87ea09d0',
//     'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });