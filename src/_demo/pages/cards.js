// https://codepen.io/sdthornton/pen/wBZdXq
import React, { Component }  from 'react'
import CodeDocs from '../../components/code-docs'
import {
    Card,
    PropTypeDocs,
    propTypesCard
} from '../../components'
import docs from '../../util/proptypes'
export default class Cards extends Component {
    render() {
        return (
            <div className='ws-card'>
                <PropTypeDocs
                    docs={docs.Card}
                    propTypes={propTypesCard}    
                />    
                <CodeDocs title='vertical alignment' code={
                    <div>
                        <Card className='padded'>
                            card depth 1                
                        </Card>
                        <br />
                        <Card className='padded' depth={'2'}>
                            card depth 2
                        </Card>
                        <br />
                        <Card className='padded' depth={'3'}>
                            card depth 3
                        </Card>
                        <br />
                        <Card className='padded' depth={'4'}>
                            card depth 4
                        </Card>
                        <br />
                        <Card className='padded' depth={'5'}>
                            card depth 5
                        </Card>
                        <br />
                    </div>
                }/>
                <CodeDocs title='horizontal alignment' code={
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Card className='padded'>
                            card depth 1                
                        </Card>
                        <br />
                        <Card className='padded' depth={'2'}>
                            card depth 2
                        </Card>
                        <br />
                        <Card className='padded' depth={'3'}>
                            card depth 3
                            <br />
                            A card is of responsive dimensions, so their size will generally adapt to wrap the content of it's children
                        </Card>
                        <br />
                        <Card className='padded' depth={'4'}>
                            card depth 4
                        </Card>
                        <br />
                        <Card className='padded' depth={'5'}>
                            card depth 5
                        </Card>
                        <br />
                    </div>
                }/>
            </div>
        )
    }
}