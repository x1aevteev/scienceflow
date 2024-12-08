import { defineStore } from 'pinia'

//Types
import type {HeaderType} from "@/types/header";
import axios, {all} from "axios";
import {NavigationBlockType} from "@/types/navigationBlock";
import {NewsBlockType, NewsSections} from "@/types/news";
import {EventsBlockType, EventsSections} from "@/types/events";
import {MainBanner} from "@/types/mainBanner";

export const pageStore = defineStore('page', {
    state: () => ({
        header: {} as HeaderType,
        navigationBLock: {} as NavigationBlockType,
        news: {} as NewsBlockType,
        singleItem: {} as NewsSections,
        events: {} as EventsBlockType,
        singleEvent: {} as EventsSections,
        mainBanner: {} as MainBanner,
        allBlocksInfo: [] as any,
        allBlocks: {} as any
    }),
    actions: {
        async getSlugs(): Promise<void> {
            try{
                const response = await axios('http://localhost:3000/allBlocks')
                this.allBlocks = response.data
            }
            catch (error) {
                console.error(error)
            }
        },
        async getInfo(blocks: any): Promise<void> {
            try{
                console.log(blocks, "блоки")
                for(let i = 0; i < blocks.length; i++){
                    const response = await axios(`http://localhost:3000/${blocks[i].name}`)
                    this.allBlocksInfo.push(response.data)
                }
                console.log(this.allBlocksInfo)
            }
            catch(error){
                console.log(error);
            }
        },
        async getHeader(){
            try{
                const response = await axios('http://localhost:3000/head')
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
        async getSinglePage(parent: string | undefined, slug: string | undefined) {
            try{
                console.log('parent', parent)
                console.log('slug', slug)
                const response = await axios(`http://localhost:3000/${parent}/${slug}`)

                //let filteredData = response.data.sections.filter((section: any) => section.slug === slug)

                console.log(response.data)

                this.singleItem = response.data
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
            }
            catch (e) {
                console.log(e)
            }
        },
        async getMainBanner(){
            try{
                const response = await axios('http://localhost:3000/banner')

                this.mainBanner = response.data
            }
            catch (e) {
                console.log(e)
            }
        }
    },
})