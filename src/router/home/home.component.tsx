import { Component } from 'react';
import SearchForm from '../../components/search-form/search-form.component';
import dataJson from '../../data.json';
import './home.style.scss';

type DefinitionData = {
    name: string;
    definitions: string;
    extra?: string;
}

type HomeState = {
    definitions: DefinitionData[];
    definitionsFiltered: DefinitionData[];
}

class Home extends Component {
    constructor(props: any) {
        super(props);

        const definitions: DefinitionData[] = dataJson.definitions
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        this.state = {
            definitions,
            definitionsFiltered: definitions
        };
    }

    /*
    * Function to handle the click on the filter buttton
    * It takes the value put in the input filter and 
    * with it, it filters the definition.
    * At the end the state is update with the filtered values.
    */
    searchFormHandler = (value: string) => {
        const filteredValues = (this.state as HomeState).definitions
            .filter((item) => item.name.toLowerCase().includes(value))
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

        this.setState({
            definitionsFiltered: filteredValues
        });
    } 

    render() {
        return (
            <article className='home'>
                <div className='home-image'></div>
                <SearchForm
                    inputPlaceholder="Chercher une définition"
                    submitHandler={this.searchFormHandler}
                    buttontext="Filtrer"
                ></SearchForm>
                <h2 className='home-title'>Définition</h2>
                <ul className='home-list'>
                    {
                        (this.state as HomeState).definitionsFiltered.map((item) => 
                        (
                            <li className='home-list-item' key={item.name}>
                                <div className='home-list-head'>
                                    {item.name}
                                </div>
                                <div className='home-list-body'>
                                    <span>
                                        {item.definitions}
                                    </span>
                                    <span className='extra'>
                                        {item.extra}
                                    </span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </article>
        );
    }
}

export default Home;
