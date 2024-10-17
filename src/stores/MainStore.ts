import { defineStore } from 'pinia'

//Types
import type {HeaderType} from "@/types/header";
import axios from "axios";
import {NavigationBlockType} from "@/types/navigationBlock";
import {NewsBlockType, NewsSections} from "@/types/news";

export const pageStore = defineStore('page', {
    state: () => ({
        header: {} as HeaderType,
        navigationBLock: {} as NavigationBlockType,
        news: {} as NewsBlockType,
        singleNews: {} as NewsSections,
    }),
    actions: {
        async getHeader(){
            try{
                const response = await axios('http://localhost:3000/head')
                console.log(response.data)
                this.header = response.data
            }
            catch (e){
                console.log(e)
            }
        },
        async getBlockRoutes() {
            try{
                const response = await axios('http://localhost:3000/navigation')
                console.log(response.data)

                this.navigationBLock = response.data
            }
            catch (e){
                console.log(e)
            }
        },
        async getNews() {
            try{
                const response = await axios('http://localhost:3000/news')
                console.log(response.data.sections)

                this.news = response.data
            }
            catch (e){
                console.log(e)
            }
        },
        async getSingleNewsPage(slug: string | undefined){
            try{
                console.log(slug)
                const response = await axios('http://localhost:3000/news')

                let filteredData = response.data.sections.filter((section: any) => section.slug === slug)

                this.singleNews = filteredData

                console.log(filteredData)
            }
            catch (e){
                console.log(e)
            }
        },
    },
})