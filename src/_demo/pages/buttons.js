import React, { Component }  from 'react'
import { Button, CodeDemo, Icon } from '../../'

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <h3>Buttons</h3>
                <CodeDemo title='Primary' code={
                    <div>
                        <Button className='primary' onClick={() => alert('Clicked primary button')}>
                            Primary
                        </Button>
                        <Button className='secondary' onClick={() => alert('Clicked secondary button')}>
                            Secondary
                        </Button>
                        <Button className='warning' onClick={() => alert('Clicked warning button')}>
                            Warning
                        </Button>
                        <Button className='danger' onClick={() => alert('Clicked warning button')}>
                            Danger
                        </Button>
                    </div>
                }/>
                <CodeDemo title='Hollow' code={
                    <div>
                        <Button className='hollow primary'>
                            Primary
                        </Button>
                        <Button className='hollow secondary'>
                            Secondary
                        </Button>
                        <Button className='hollow warning'>
                            Warning
                        </Button>
                        <Button className='hollow danger'>
                            Danger
                        </Button>
                    </div>
                }/>
                <CodeDemo title='Links' code={
                    <div>
                        <Button className='link primary'>
                            Primary
                        </Button>
                        <Button className='link secondary'>
                            Secondary
                        </Button>
                        <Button className='link warning'>
                            Warning
                        </Button>
                        <Button className='link danger'>
                            Danger
                        </Button>
                    </div>
                } />
                <CodeDemo title='Rounded' code={
                    <div>
                        <Button className='primary rounded'>
                            <Icon name='bars' />
                        </Button>
                        <Button className='secondary rounded'>
                            <Icon name='question' />
                        </Button>
                        <Button className='warning rounded'>
                            <Icon name='exclamation' />
                        </Button>
                        <Button className='danger rounded'>
                            <Icon name='trash' />
                        </Button>
                    </div>
                } />
                <CodeDemo title='Rounded' code={
                    <div>
                        <Button className='primary filled'>
                            <Icon name='microphone' />
                        </Button>
                        <Button className='filled'>
                            This is a full width button
                        </Button>
                        <Button className='warning filled'>
                            The CSS class is 'filled'
                        </Button>
                        <Button className='danger filled'>
                            The CSS class is 'filled'
                        </Button>
                    </div>
                }/>
            </div>
        )
    }
}

