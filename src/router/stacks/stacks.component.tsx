import dataJson from '../../data.json';
import { Component, Fragment } from 'react';
import SearchForm from '../../components/search-form/search-form.component';
import { StackData } from '../../common/models/common-models.component';
import StackCard from '../../components/stack-card/stack-card.component';
import '../../common/page.component.scss';

type StacksState = {
    stacks: StackData[],
    searchResults: StackData[]
}

class Stacks extends Component<object, StacksState> {
    constructor(props: object) {
        super(props);

        const stacks = dataJson.stacks;

        this.state = {
            stacks,
            searchResults: stacks
        };
     } 

    searchFormHandler = (value: string) => {
        const filteredValues = this.state.stacks
            .filter((item) => item.name.toLowerCase().includes(value) ||
                item.tools?.some((i) => i.toLowerCase().includes(value))
            );

        this.setState({
            searchResults: filteredValues
        });
    } 

    render() {
        return (
            <Fragment>
                <SearchForm inputPlaceholder='Rechercher par nom' submitHandler={this.searchFormHandler} />
                <article className='page-grid'>
                    {
                        this.state.searchResults.map((stack) => <StackCard
                            key={stack.name}
                            stack={stack}
                        ></StackCard>)
                    }
                </article>
            </Fragment>
        );
    }
}

export default Stacks;

