import { Colors } from '../button/button.component';
import './information-card.style.scss';

type LanguageData = {
    name: string;
    image?: string;
    frameworks?: string[];
    usage?: string[];
    devType?: string[];
    advantage?: string[];
    disavantage?: string[];
}

type cardProps = {
    color: Colors;
    languageData: LanguageData;
}

function InformationCard(props: cardProps) {
    const color = props.color === 'ORANGE' ? 'orange' : 'blue';

    return (
        <div className='language-card-container'>
            <div className='card-header'>
                <div className={`badge ${color}`}>
                    <h2 className='name'>{ props.languageData.name }</h2>
                </div>
            </div>
            <div className='card-content'>
                <p className='description description-head'>
                    Framework(s):
                </p>
                <p className='description'>
                    { props.languageData.frameworks?.join(', ') || '-' }
                </p>

                <p className='description description-head'>
                    Domaine(s) d'application:
                </p>
                <p className='description'>
                    { props.languageData.usage?.join(', ') || '-' }
                </p>

                <p className='description description-head'>
                    Utilisation(s):
                </p>
                <p className='description'>
                    { props.languageData.devType?.join(' et ') || '-' }
                </p>

                <p className='description description-head'>
                    Point(s) fort:
                </p>
                <p className='description'>
                    { props.languageData.advantage?.join(', ') || '-' }
                </p>

                <p className='description description-head'>
                    Point(s) faible:
                </p>
                <p className='description'>
                    { props.languageData.disavantage?.join(', ') || '-' }
                </p>
            </div>
        </div>
    );
}

export default InformationCard;
