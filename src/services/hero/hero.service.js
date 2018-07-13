import axios from 'axios';
import messageStore from '../message/message.store'


const api = 'http://localhost:3000/heroes/';

const options = { headers: { 'crossDomain': true }}

class HeroService {

    log(message) {
        messageStore.state.push(message)
    }

    deleteHero(hero) {
        return axios.delete(`${api}${hero._id} `)
            .then((response) => {
                this.log(`deleted hero id=${hero._id}`)
                return response

            }).catch((error)=>{
                this.log(error.response.data);
                return;
            });
    };

    getHero(id){
        return axios.get(`${api}` + id, options)
            .then((response) => {
            this.log(`fetched hero id=${id}`)
            return response;
        }).catch((error)=>{
            this.log(error.response.data);
            return;
        });
    }
    getHeroes() {
        return axios.get(`${api}`,options)
            .then((response) => {
                this.log(`fetched heroes`);
                return response

            }).catch((error)=>{
                this.log(error.response.data);
                return;
            });
    }
    addHero(heroName) {
        return axios.post(`${api}`, { name: heroName })
            .then((response) => {
                this.log(`add an hero`);
                return response

            }).catch((error)=>{
                this.log(error.response.data);
                return;
            });
    }
    updateHero(hero) {
        return axios.put(`${api}${hero._id}`, { name: hero.name })
            .then((response) => {
                this.log(`updated hero id=${hero._id}`);
                return response

            }).catch((error)=>{
                this.log(error.response.data);
                return;
            });
    }

    /* GET heroes whose name contains search term */
    searchHeroes(term)  {

        return axios.get(`${api}?name=${term}`,options)
            .then((response) => {

                if(response.status === 204){
                    this.log(`no heroes matching with  "${term}`);
                    return;
                }

                this.log(`${response.data.length} heroes matching with "${term}`);
                return response

            }).catch((error)=>{
                this.log(error.reponse);
                return;
            });
    }
}

export const heroService = new HeroService();
