'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Checkbox, Header, RailSandbox, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const positionSample = `import React from 'react';
import { RailSandbox } from 'react-cm-ui';

export default class PositionSample extends React.Component {
    render() {
        return (
            <div>
                <RailSandbox position="left">
                    Put your sample code here
                </RailSandbox>
            </div>
        );
    }
}`;

export default class ElementsRailSandbox extends React.Component {
    render() {

        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the radio input\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'someProp',
                type: 'enum',
                default: '',
                description: 'This Prop can do something',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="RailSandbox">
                <TitleBar title="RailSandbox" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Position */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Position
                    <Header.Subheader>
                        Position a RailSandbox to either the left or right.
                    </Header.Subheader>
                </Header>

                <Block style={{ height: '400px', position: 'relative' }}>
                    <RailSandbox position="left">
                        <div>Do some stuff here...</div>
                    </RailSandbox>
                    <RailSandbox position="">
                        <div>Do some stuff here...</div>
                    </RailSandbox>
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {positionSample}
                </Highlighter>
            </Main>
        );
    }
}
