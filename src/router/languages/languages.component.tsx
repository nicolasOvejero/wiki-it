import InformationCard from '../../components/information-card/information-card.component';
import './languages.style.scss';
import dataJson from '../../data.json';

function Languages() {
    const languages = dataJson.languages.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    return (
        <article className='languages-grid'>
            {
                languages.map((lang) => <InformationCard languageData={lang}></InformationCard>)
            }
        </article>
    );
}

export default Languages;

