import { Fragment } from 'react';
import './information-card-description.style.scss';

type cardProps = {
    head: string;
    value: string | undefined;
}

function InformationCardDescription(props: cardProps) {
    return (
        <Fragment>
            <p className='description description-head'>
                {props.head}:
            </p>
            <p className='description'>
                { props.value || '-' }
            </p>
        </Fragment>
    );
}

export default InformationCardDescription;
