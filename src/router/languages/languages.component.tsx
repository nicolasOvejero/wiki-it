import InformationCard from '../../components/information-card/information-card.component';
import './languages.style.scss';
import dataJson from '../../data.json';
import { Component, Fragment } from 'react';
import SearchForm from '../../components/search-form/search-form.component';
import { LanguageData } from '../../common/models/common-models.component';

type StateModel = {
    languages: LanguageData[],
    searchResults: LanguageData[]
}

class Languages extends Component {
    constructor(props: any) {
        super(props);

        const languages = dataJson.languages
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

        this.state = {
            languages,
            searchResults: languages
        };
     } 

    /*
    * Function to handle the click on the submit buttton
    * It takes the value put in the input filter and 
    * with it, it filters the languages.
    * At the end the state is update with the filtered values.
    */
    searchFormHandler = (value: string) => {
        const filteredValues = (this.state as StateModel).languages
            .filter((item) => item.name.toLowerCase().includes(value) ||
                item.devType?.some((i) => i.toLowerCase().includes(value))
            )
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

        this.setState({
            searchResults: filteredValues
        });
    } 

    render() {
        return (
            <Fragment>
                <SearchForm inputPlaceholder='Rechercher par nom ou par utilisation' submitHandler={this.searchFormHandler} />
                <article className='languages-grid'>
                    {
                        (this.state as StateModel).searchResults.map((lang) => <InformationCard
                            key={lang.name}
                            color="ORANGE"
                            languageData={lang}
                            cardtype="language"
                        ></InformationCard>)
                    }
                </article>
            </Fragment>
        );
    }
}

export default Languages;

