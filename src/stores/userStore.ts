import { defineStore } from 'pinia'
import axios, {all} from "axios";
import {loggedUser, User} from "@/types/user";
import {ERROR_TYPE} from "@/constants/errors";


export const userStore = defineStore('user',{
    state: () => ({
        isLoggedIn: false,
        currentUser: null,
        user: {} as User,
        error: '' as string,
    }),
    actions: {
        async register(user: {}): Promise<void> {
            try{
                const response = await axios.post('http://localhost:3000/users', user)
                if(response.status === 200){
                    this.currentUser = response.data
                    this.isLoggedIn = true
                }
            } catch(e){
                console.error(e);
                this.error = ERROR_TYPE.user.registration
            }
        },
        async login(data: loggedUser): Promise<void> {
            try{
                const reponse = await axios.get(`http://localhost:3000/users?=email=${data.email}`)
                const user = reponse.data
                if(user && user.password === data.password){
                    this.currentUser = user
                    this.isLoggedIn = true
                }
            } catch(e){
                console.error(e);
                this.error = ERROR_TYPE.user.auth
            }
        },
        async logout(): Promise<void> {
            try{
                this.currentUser = null;
                this.isLoggedIn = false
            } catch(e){
                console.error(e);
                this.error = ERROR_TYPE.user.logout
            }
        },
        async deleteUser(id: string): Promise<void> {
           try{
               const reponse = await axios.delete(`http://localhost:3000/users/${id}`)
               this.isLoggedIn = true
               this.currentUser = null
           } catch(e){
               console.error(e);
               this.error = ERROR_TYPE.user.delete
           }
        }
    }
})