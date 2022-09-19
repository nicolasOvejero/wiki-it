import './information-card.style.scss';

type LanguageData = {
    name: string;
    image?: string;
    frameworks?: string[];
    usage?: string[];
    devType?: string[];
}

type cardProps = {
    languageData: LanguageData;
}

function InformationCard(props: cardProps) {
    return (
        <div className='language-card-container'>
            <div className='card-header'>
                <img
                    className='card-logo'
                    src={props.languageData.image}
                    alt={`${props.languageData.name} logo`}
                />
                <div className='card-minimal-info'>
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
            </div>
        </div>
    );
}

export default InformationCard;
