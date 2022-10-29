import InformationCard from '../../components/information-card/information-card.component';
import dataJson from '../../data.json';
import { Component, Fragment } from 'react';
import SearchForm from '../../components/search-form/search-form.component';
import { LanguageData } from '../../common/models/common-models.component';
import '../../common/page.component.scss';

type LanguagesState = {
    languages: LanguageData[],
    searchResults: LanguageData[]
}

class Languages extends Component<object, LanguagesState> {
    constructor(props: object) {
        super(props);

        const languages = dataJson.languages
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

        this.state = {
            languages,
            searchResults: languages
        };
     } 

    searchFormHandler = (value: string) => {
        const filteredValues = this.state.languages
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
                <article className='page-grid'>
                    {
                        this.state.searchResults.map((lang) => <InformationCard
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

