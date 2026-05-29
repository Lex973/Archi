import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {newsApiResponse} from "../types.ts";

// апи для крипто новостей

const BASE_URL = 'https://newsapi.org/v2';
const newsApiKey = '6c3d6fec26e1453db08d9433be5bf1f8';

const now = new Date(Date.now()).toISOString().slice(0, 10);

const date = new Date();
date.setDate(date.getDate() - 10);
const tenDaysAgo = date.toISOString().slice(0, 10);

export const fetchApiNews = createApi({
    reducerPath: 'NewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json');
            headers.set('X-Api-Key', newsApiKey);
        }
    }),
    endpoints: (builder) => ({
        getLatestNews: builder.infiniteQuery<newsApiResponse, {
            pageSize: number; searchQuery: string, sortByNews: string, languageNews: string
        }, number>({
            infiniteQueryOptions: {
                initialPageParam: 1,
                getNextPageParam: (_, _allPages, lastPageParam) => {
                    if (_allPages.length === 15) return undefined
                    return lastPageParam + 1
                }
            },
            query({ queryArg, pageParam }) {
                const q = queryArg.searchQuery || 'crypto';
                return `/everything?q=${q}&from=${tenDaysAgo}&to=${now}&sortBy=${queryArg.sortByNews.toLowerCase()}&pageSize=${queryArg.pageSize}&language=${queryArg.languageNews}&page=${pageParam}`
            },
        })
    })
})

export const {
    useGetLatestNewsInfiniteQuery,
} = fetchApiNews;