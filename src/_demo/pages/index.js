import React, { Component } from 'react'
import { If } from '../../'
import Application from './application'
import Buttons from './buttons'
import Cards from './cards'
import Dropdowns from './dropdowns'
import Errors from './errors'
import Files from './files'
import Icons from './icons'
import Inputs from './inputs'
import Lists from './lists'
import Loaders from './loaders'
import Media from './media'
import Time from './time'
import Trees from './trees'
import './style.scss'
import { Link } from 'react-router-dom'
import propTypesToObject from '../../util/proptype-obj'
import CodeDemo from '../../components/code-demo'

export default class BiloUI extends Component {
    state = {
        activePage: 'files'
    }
    componentDidMount() {
        const page = this.props.location.hash.slice(1)
        this.selectSection(page)
        console.log('proptypes:', CodeDemo.propTypes)
        // console.log('output:', propTypesToObject(CodeDemo.propTypes))
    }

    render() {
        const uiPages = [
            'all',
            'application',
            'buttons',
            'cards',
            'dropdowns',
            'errors',
            'files',
            'icons',
            'inputs',
            'lists',
            'loaders',
            'media',
            'modals',
            'time',
            // 'trees',
        ]
        const { activePage } = this.state
        return (
            <div className='page page-padded'>
                <div className={'nav-menu'}>
                    {
                        uiPages.map((page) => {
                            // return <div
                            //     key={`xui-page-${page}`}
                            //     className={`nav-item ${page === activePage ? 'nav-item-active' : ''}`}
                            //     onClick={() => this.selectSection(page)}>
                            //     {page.toLocaleUpperCase()}
                            // </div>
                            return <Link
                                key={`xui-page-${page}`}
                                to={`${this.props.location.pathname}#${page}`}
                                onClick={() => this.selectSection(page)}
                                className='no-link'>
                                <div
                                    className={`nav-item ${page === activePage ? 'nav-item-active' : ''}`}>
                                    {page.toLocaleUpperCase()}
                                </div>
                            </Link>
                        })
                    }    
                </div>
                <div className={'nav-content'}>

                    <If isTrue={activePage === 'all'}>
                        <Application />
                        <Buttons />
                        <Cards />
                        <Dropdowns />
                        <Errors />
                        <Files />
                        <Icons />
                        <Inputs />    
                        <Lists />
                        <Loaders />  
                        <Media />    
                        <Time />
                        <Trees />
                    </If>    
                    <If isTrue={activePage === 'application'}>
                        <Application />
                    </If>
                    <If isTrue={activePage === 'buttons'}>
                        <Buttons />
                    </If>
                    <If isTrue={activePage === 'cards'}>
                        <Cards />
                    </If>
                    <If isTrue={activePage === 'dropdowns'}>
                        <Dropdowns />
                    </If>
                    <If isTrue={activePage === 'errors'}>
                        <Errors />
                    </If>
                    <If isTrue={activePage === 'files'}>
                        <Files />
                    </If>
                    <If isTrue={activePage === 'icons'}>
                        <Icons />
                    </If>
                    <If isTrue={activePage === 'inputs'}>
                        <Inputs />
                    </If>
                    <If isTrue={activePage === 'lists'}>
                        <Lists />
                    </If>
                    <If isTrue={activePage === 'loaders'}>
                        <Loaders />
                    </If>
                    <If isTrue={activePage === 'media'}>
                        <Media />
                    </If> 
                    <If isTrue={activePage === 'time'}>
                        <Time />
                    </If>
                    <If isTrue={activePage === 'trees'}>
                        <Trees />
                    </If>
                </div>
            </div>
        )
    }
    selectSection = (page) => {
        this.setState({ ...this.state, activePage: (page || 'all') }, () => console.log(this.state))
    }
}