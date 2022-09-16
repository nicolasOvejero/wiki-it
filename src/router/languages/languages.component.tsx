import InformationCard from '../../components/information-card/information-card.component';
import './languages.style.scss';

function Languages() {
    return (
        <article className='languages-grid'>
            <InformationCard></InformationCard>
            <InformationCard></InformationCard>
        </article>
    );
}

export default Languages;

