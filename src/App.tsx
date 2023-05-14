import React from 'react';
import type {FC} from 'react';
import {Button} from 'antd';
import 'antd/dist/reset.css';
import './App.less';
import styled from "styled-components";

const StyledButton = styled(Button)`
  border: 2px solid red;
`
const App: FC = () => (
    <div className="App">
        <StyledButton type="primary">Test</StyledButton>
    </div>
);

export default App;
