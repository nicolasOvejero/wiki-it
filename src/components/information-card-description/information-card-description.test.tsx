import { render, screen } from '@testing-library/react';
import InformationCardDescription from './information-card-description.component';

describe('render information card description', () => {
    it('full props', () => {
        render(
            <InformationCardDescription
                head='Label'
                value='Value'
            />
        );

        const label = screen.getByText('Label:');
        expect(label).toBeInTheDocument();
        expect(label).toHaveClass('description', 'description-head');

        const value = screen.getByText('Value');
        expect(value).toBeInTheDocument();
        expect(value).toHaveClass('description');
    })

    it('default description', () => {
        render(
            <InformationCardDescription
                head='Label'
                value={undefined}
            />
        );

        const label = screen.getByText('Label:');
        expect(label).toBeInTheDocument();
        expect(label).toHaveClass('description', 'description-head');

        const value = screen.getByText('-');
        expect(value).toBeInTheDocument();
        expect(value).toHaveClass('description');
    })
});
