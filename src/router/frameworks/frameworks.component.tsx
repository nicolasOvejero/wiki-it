import InformationCard from '../../components/information-card/information-card.component';
import dataJson from '../../data.json';
import { Component, Fragment } from 'react';
import SearchForm from '../../components/search-form/search-form.component';
import { FrameworkData } from '../../common/models/common-models.component';
import '../../common/page.component.scss';

type FrameworksState = {
    framworks: FrameworkData[],
    searchResults: FrameworkData[]
}

class Frameworks extends Component<object, FrameworksState> {
    constructor(props: object) {
        super(props);

        const framworks = dataJson.framworks
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

        this.state = {
            framworks,
            searchResults: framworks
        };
     } 

    searchFormHandler = (value: string) => {
        const filteredValues = this.state.framworks
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

