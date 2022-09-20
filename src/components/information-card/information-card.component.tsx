import { Fragment } from 'react';
import { LanguageData } from '../../common/models/common-models.component';
import { Colors } from '../button/button.component';
import InformationCardDescription from '../information-card-description/information-card-description.component';
import './information-card.style.scss';

type cardProps = {
    color: Colors;
    languageData: LanguageData;
    cardtype?: "language" | "frameworks";
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
                {
                    props.cardtype === "frameworks" ? (
                        <InformationCardDescription
                            head="Langage(s)"
                            value={ props.languageData.languages?.join(', ') }
                        ></InformationCardDescription>
                    ) : (
                        <InformationCardDescription
                            head="Framework(s)"
                            value={ props.languageData.frameworks?.join(', ') }
                        ></InformationCardDescription>
                    )
                }

                <InformationCardDescription
                    head="Domaine(s) d'application"
                    value={ props.languageData.usage?.join(', ') }
                ></InformationCardDescription>

                <InformationCardDescription
                    head="Utilisation(s)"
                    value={ props.languageData.devType?.join(', ') }
                ></InformationCardDescription>

                <InformationCardDescription
                    head="Point(s) fort"
                    value={ props.languageData.advantage?.join(', ') }
                ></InformationCardDescription>

                <InformationCardDescription
                    head="Point(s) faible"
                    value={ props.languageData.disavantage?.join(', ') }
                ></InformationCardDescription>
            </div>
        </div>
    );
}

export default InformationCard;
