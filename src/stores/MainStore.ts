import { defineStore } from 'pinia'

//Types
import type {HeaderType} from "@/types/header";
import axios from "axios";
import {NavigationBlockType} from "@/types/navigationBlock";

export const pageStore = defineStore('page', {
    state: () => ({
        header: {} as HeaderType['head'],
        navigationBLock: {} as NavigationBlockType['head']
    }),
    actions: {
        async getHeader(){
            try{
                const response = await axios('http://localhost:3000/head')
                console.log(response.data)

                this.header = response.data.head
            }
            catch (e){
                console.log(e)
            }
        },
        async getBlockRoutes() {
            try{
                const response = await axios('http://localhost:3000/head')
                console.log(response.data)

                this.header = response.data.navigationBLock
            }
            catch (e){
                console.log(e)
            }
        }
    },
})