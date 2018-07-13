import React, { Component } from 'react';
import './HeroSearch.css';
import { Link } from 'react-router-dom'
import { heroService } from '../../services/hero/hero.service';


class HeroSearch extends Component {

    state = {
        heroes :[]

    }
    constructor(){
        super();
        this.getHeroes()
        
    }

    

    getHeroes() {
        
    }

    handleInputChange = () => {
        if(this.search.value !== ""){
            
            heroService.searchHeroes(this.search.value).then((response) => {
                if(response)
                    this.setState({heroes: response.data})
                else
                    this.setState({heroes: []})
            })
        }
        else
            this.setState({heroes: []})
    }

    render() {
        return (
        <div>
            <div id="search-component">
                <h4>Hero Search</h4>

                <input id="search-box"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />

                <ul className="search-result">

                    { this.state.heroes.map((hero, index) => 
                        <li key={index}>
                            <Link to={`/detail/${hero._id}`}>
                                {hero.name}
                            </Link>
                        </li>
                    )}

                </ul>
            </div>

        </div>
        );
  }
}

export default HeroSearch;
