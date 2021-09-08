import React from 'react';
import {render} from '@testing-library/react';
import Heading from './components/Heading';
import Body from './components/body';

test('renders Body component', () => {
    const children = "Hello world!";
    const {container} = render(<Body>{children}</Body>);
    expect(container).toBeInTheDocument();
});

test('renders heading with props', () => {
    const title = 'This is title';
    const subtitle = 'This is subtitle';
    const {getByText} = render(<Heading title={title} subtitle={subtitle}/>);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
});
