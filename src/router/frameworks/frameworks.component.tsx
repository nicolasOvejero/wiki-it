import InformationCard from '../../components/information-card/information-card.component';
import './frameworks.style.scss';
import dataJson from '../../data.json';

function Frameworks() {
    const languages = dataJson.framworks.sort(
        (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );

    return (
        <article className='languages-grid'>
            {
                languages.map((lang) => <InformationCard
                    color="BLUE"
                    languageData={lang}
                ></InformationCard>)
            }
        </article>
    );
}

export default Frameworks;

