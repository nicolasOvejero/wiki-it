import { Fragment } from 'react';
import './information-card-description.style.scss';

type InformationCardProps = {
    head: string;
    value: string | undefined;
}

const InformationCardDescription: React.FC<InformationCardProps> = (props: InformationCardProps) => {
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
