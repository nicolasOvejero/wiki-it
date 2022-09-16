import './information-card.style.scss';

function InformationCard() {
    return (
        <div className='language-card-container'>
            <div className='card-header'>
                <img
                    className='card-logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/600px-Python_logo_01.svg.png"
                    alt="'language' logo"
                />
                <div className='card-minimal-info'>
                    <h2 className='name'>Python</h2>
                </div>
            </div>
            <div className='card-content'>
                <p className='description description-head'>
                    Framework(s):
                </p>
                <p className='description'>
                    Flask, Django, CherryPy, Dash, Falcon, Web2py
                </p>

                <p className='description description-head'>
                    Domaine(s) d'application:
                </p>
                <p className='description'>
                    PaintTest, scripting reseau
                </p>

                <p className='description description-head'>
                    Utilisation(s):
                </p>
                <p className='description'>
                    Frontend et Backend
                </p>
            </div>
        </div>
    );
}

export default InformationCard;
