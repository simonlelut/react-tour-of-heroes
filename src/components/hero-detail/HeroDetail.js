import React, { Component } from 'react';
import './HeroDetail.css';
import { heroService } from '../../services/hero/hero.service';
import Hero  from '../../models/hero'


class HeroDetail extends Component {


    state = {
        hero : Hero
    }

    constructor(){
        super();
        this.getHero();
        

        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }
    getHero(){
        let params = window.location.href.split("/");

        return heroService.getHero(params[params.length - 1])
             .then(hero => {
                 if(hero)
                    this.setState({hero: hero.data})
             });
    }

    goBack() {
        window.history.back();
    }

    save() {
        heroService.updateHero(this.state.hero)
            .then(() => this.goBack());
    }

    handleChange(event) {
        let hero = this.state.hero;
        hero.name = event.target.value
        this.setState({hero: hero});
      }

  render() {
    return (

     <div>
        <h1>HeroDetail</h1>
        

        <h2>{ this.state.hero.name} Details</h2>
        <div><span>id: </span>{this.state.hero._id}</div>
        <div>
            <label>name:
                <input type="text" value={this.state.hero.name} onChange={this.handleChange}/>
            </label>
        </div>
        <button onClick={this.goBack}>go back</button>
        <button onClick={this.save}>save</button>
     </div>
    );
  }
}

export default HeroDetail;
