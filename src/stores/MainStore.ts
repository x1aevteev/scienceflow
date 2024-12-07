import { defineStore } from 'pinia'

//Types
import type {HeaderType} from "@/types/header";
import axios from "axios";
import {NavigationBlockType} from "@/types/navigationBlock";
import {NewsBlockType, NewsSections} from "@/types/news";
import {EventsBlockType, EventsSections} from "@/types/events";
import {MainBanner} from "@/types/mainBanner";

export const pageStore = defineStore('page', {
    state: () => ({
        header: {} as HeaderType,
        navigationBLock: {} as NavigationBlockType,
        news: {} as NewsBlockType,
        singleNews: {} as NewsSections,
        events: {} as EventsBlockType,
        singleEvent: {} as EventsSections,
        mainBanner: {} as MainBanner,
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

                this.navigationBLock = response.data
            }
            catch (e){
                console.log(e)
            }
        },
        async getNews() {
            try{
                const response = await axios('http://localhost:3000/news')

                this.news = response.data
            }
            catch (e){
                console.log(e)
            }
        },
        async getSingleNewsPage(slug: string | undefined){
            try{
                const response = await axios('http://localhost:3000/news')

                let filteredData = response.data.sections.filter((section: any) => section.slug === slug)

                this.singleNews = filteredData

                console.log(filteredData)
            }
            catch (e){
                console.log(e)
            }
        },
        async getEvents(){
            try{
                const response = await axios('http://localhost:3000/events')

                this.events = response.data
            }
            catch (e) {
                console.log(e)
            }
        },
        async getFooter(){
            try{
                const response = await axios('http://localhost:3000/footer')

                console.log(response.data)
            }
            catch (e) {
                console.log(e)
            }
        },
        async getMainBanner(){
            try{
                const response = await axios('http://localhost:3000/banner')

                this.mainBanner = response.data

                console.log(response.data)
            }
            catch (e) {
                console.log(e)
            }
        }
    },
})