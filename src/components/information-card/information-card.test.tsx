import { render, screen, within } from '@testing-library/react';
import { getByClass } from '../../setupTests';
import InformationCard from './information-card.component';

describe('render information card', () => {
    it('card header for language', () => {
        render(
            <InformationCard
                color='ORANGE'
                languageData={
                    {
                        name: 'JavaScript',
                        frameworks: ['ReactJs', 'Angular'],
                        usage: ['Site web', 'API'],
                        devType: ['Front', 'Back', 'FullStack JS'],
                        advantage: ['Rapide', 'JS'],
                        disavantage: ['JS', 'Node']
                    }
                }
                cardtype='language'
            />
        );

        const container = getByClass('language-card-container', screen);
        expect(container).toBeInTheDocument();
        expect(container.nodeName).toEqual('DIV');

        const header = getByClass('card-header', screen);
        expect(header).toBeInTheDocument();
        expect(header.nodeName).toEqual('DIV');

        const badge = getByClass('badge', screen);
        expect(badge).toBeInTheDocument();
        expect(badge.nodeName).toEqual('DIV');
        expect(badge).toHaveClass('badge', 'orange');

        const name = within(badge).getByText('JavaScript');
        expect(name).toBeInTheDocument();
        expect(name.nodeName).toEqual('H2');
    });

    it('card header for framwork', () => {
        render(
            <InformationCard
                color='BLUE'
                languageData={
                    {
                        name: 'ReactJs',
                        languages: ['JavaScript', 'TypeScript'],
                        usage: ['Site web'],
                        devType: ['Front']
                    }
                }
                cardtype='frameworks'
            />
        );

        const container = getByClass('language-card-container', screen);
        expect(container).toBeInTheDocument();
        expect(container.nodeName).toEqual('DIV');

        const header = getByClass('card-header', screen);
        expect(header).toBeInTheDocument();
        expect(header.nodeName).toEqual('DIV');

        const badge = getByClass('badge', screen);
        expect(badge).toBeInTheDocument();
        expect(badge.nodeName).toEqual('DIV');
        expect(badge).toHaveClass('badge', 'blue');

        const name = within(badge).getByText('ReactJs');
        expect(name).toBeInTheDocument();
        expect(name.nodeName).toEqual('H2');
    });

    it('descriptions', () => {
        render(
            <InformationCard
                color='ORANGE'
                languageData={
                    {
                        name: 'JavaScript',
                        frameworks: ['ReactJs', 'Angular'],
                        usage: ['Site web', 'API'],
                        devType: ['Front', 'Back', 'FullStack JS'],
                        advantage: ['Rapide', 'JS'],
                        disavantage: ['JS', 'Node']
                    }
                }
                cardtype='language'
            />
        );

        const badge = getByClass('badge', screen);
        const name = within(badge).getByText('JavaScript');
        expect(name).toBeInTheDocument();

        const content = getByClass('card-content', screen);
        expect(content).toBeInTheDocument();
        expect(content.nodeName).toEqual('DIV');

        const headers = ['Framework(s):', "Domaine(s) d'application:", 'Utilisation(s):', 'Point(s) fort:', 'Point(s) faible:']
        for (let header of headers) {
            const value = within(content).getByText(header);
            expect(value).toBeInTheDocument();
            expect(value.nodeName).toEqual('P');
            expect(value).toHaveClass('description', 'description-head');
        }

        const values = ['ReactJs, Angular', 'Site web, API', 'Front, Back, FullStack JS', 'Rapide, JS', 'JS, Node']
        for (let value of values) {
            const valueDesc = within(content).getByText(value);
            expect(valueDesc).toBeInTheDocument();
            expect(valueDesc.nodeName).toEqual('P');
            expect(valueDesc).toHaveClass('description');
        }
    });
});
