import { defineStore } from 'pinia'

//Types
import type {HeaderType} from "@/types/header";
import axios from "axios";

export const pageStore = defineStore('page', {
    state: () => ({
        header: {} as HeaderType['head']
    }),
    // could also be defined as
    // state: () => ({ count: 0 })
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
        }
    },
})