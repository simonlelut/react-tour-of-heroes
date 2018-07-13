import './dashboard.css';
import React, { Component } from 'react';
import { heroService } from '../../services/hero/hero.service';
import { Link } from 'react-router-dom'

import HeroSearch from '../hero-search/HeroSearch'

class Dashboard extends Component {
  
    state = {
        heroes :[]

    }
    constructor(){
        super();
        this.getHeroes()
        
    }

    getHeroes() {

        return heroService.getHeroes()
            .then((response) => {
                if(response)
                    this.setState({heroes : response.data.slice})
            });
    }


    render() {
        return (
         <div>
         <h3>Top Heroes</h3>

            <div className="grid grid-pad">

        
                { this.state.heroes.map((hero,index) => 
                    <Link to={`/detail/${hero._id}`} className="col-1-4" key={index}>
                        <div className="module hero">
                            <h4>{hero.name}</h4>
                        </div>
                    </Link>
                )}

            </div>

            <HeroSearch></HeroSearch>
         </div>
        );
      }
}

export default Dashboard;
