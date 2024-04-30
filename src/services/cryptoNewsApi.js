import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const cryptoNewsHeaders = {
    
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'de2169b118msh2adad50199482f7p15b8fcjsn8385751e1415',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off7textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});



export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;