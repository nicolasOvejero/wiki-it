import InformationCard from '../../components/information-card/information-card.component';
import './frameworks.style.scss';
import dataJson from '../../data.json';
import { Component, Fragment } from 'react';
import SearchForm from '../../components/search-form/search-form.component';
import { LanguageData } from '../../common/models/common-models.component';

type StateModel = {
    framworks: LanguageData[],
    searchResults: LanguageData[]
}

class Frameworks extends Component {
    constructor(props: any) {
        super(props);

        const framworks = dataJson.framworks
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

        this.state = {
            framworks,
            searchResults: framworks
        };
     } 


    searchFormHandler = (value: string) => {
        const filteredValues = (this.state as StateModel).framworks
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
                            color="BLUE"
                            languageData={lang}
                            cardtype="frameworks"
                        ></InformationCard>)
                    }
                </article>
            </Fragment>
        );
    }
}

export default Frameworks;

