import { FormEvent, FormEventHandler } from 'react';
import Button from '../button/button.component';
import './search-form.style.scss';

type SearchFormProps = {
    inputPlaceholder: string;
    submitHandler: (value: string) => void;
}

function SearchForm(props: SearchFormProps) {
    const submitHandler: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const value = (event.currentTarget.elements.namedItem('search-input') as HTMLInputElement).value;

        props.submitHandler(value.toLowerCase());
    };

    return (
        <form className='search-form' onSubmit={submitHandler}>
            <input
                className='search-input'
                type="text"
                name="search-input"
                placeholder={props.inputPlaceholder}
            />
            <Button text="Rechercher" color="YELLOW" type="submit"></Button>
        </form>
    );
}

export default SearchForm;
