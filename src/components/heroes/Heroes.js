import React, { Component } from 'react';
import './Heroes.css';
import { heroService } from '../../services/hero/hero.service';
import { Link } from 'react-router-dom'



class Heroes extends Component {
    state = {
        heroes :[],
        heroName: ""

    }
    constructor(){
        super();
        
        this.getHeroes()

        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
        
    }

    getHeroes() {

        return heroService.getHeroes()
            .then((response) => {
                if(response)
                    this.setState({heroes: response.data})
            });
    }
    handleChange(event) {
        this.setState({heroName: event.target.value});
      }

    add() {

        if (this.state.heroName === "") { return; }

            heroService.addHero(this.state.heroName).then(response => (this.getHeroes()));

            this.setState({heroName: ''});
    }

    deleteHero(hero){

        heroService.deleteHero(hero).then((response) =>{
            if(response)
                this.setState({heroes: this.state.heroes.filter(h => h !== hero)})
                
        });
    }

  render() {
    return (
     <div>
     <h2>My Heroes</h2>

        <div>
            <label>Hero name:
                <input type="text"  value={this.state.heroName} onChange={this.handleChange}/>
            </label>
            <button onClick={this.add}>add</button>
        </div>
        <ul className="heroes">

            { this.state.heroes.map((hero, index) => 
                <li key={index}>
                    <Link to={`/detail/${hero._id}`}>
                        {hero.name}
                    </Link>
                    <button className="delete" title="delete hero" onClick={() => this.deleteHero(hero)}>x</button>
                </li>
                
            )}

        </ul>
     </div>
    );
  }
}

export default Heroes;
