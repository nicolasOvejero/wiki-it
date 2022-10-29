import { StackData } from '../../common/models/common-models.component';
import InformationCardDescription from '../information-card-description/information-card-description.component';
import '../../common/card.component.scss';

type StackCardProps = {
    stack: StackData;
}

const StackCard: React.FC<StackCardProps> = (props: StackCardProps) => {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='badge green'>
                    <h2 className='name'>{ props.stack.name }</h2>
                </div>
            </div>
            <div className='card-content'>
                <InformationCardDescription
                    head="Langages/Frameworks"
                    value={ props.stack.tools?.join(', ') }
                ></InformationCardDescription>

                <InformationCardDescription
                    head="Type"
                    value={ props.stack.type }
                ></InformationCardDescription>

                <InformationCardDescription
                    head="Avantage(s)"
                    value={ props.stack.advantage?.join(', ') }
                ></InformationCardDescription>
            </div>
        </div>
    );
}

export default StackCard;
