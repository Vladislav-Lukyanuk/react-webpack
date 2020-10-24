import * as React from 'react';

import ReactPng from './assets/images/react.png';
import { StyledDiv } from './root.styles';

export const Root = () => (
    <div>
        <img src={ReactPng}/>
        <StyledDiv />
    </div>
);