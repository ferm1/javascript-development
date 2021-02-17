import React, { Component } from 'react';
import { Layout } from 'antd';
import Brand from '../features/brand/Brand';
import Search from '../features/search/Search';
import Map from '../features/map/Map';
import SearchResult from '../features/search-result/SearchResult';

const { Content } = Layout;

class Main extends Component {
    render() {
        return (
            <div>
                <Content>
                    <Brand />
                    <Search />
                    <div className='search-content'>
                    <Map />
                    <SearchResult />
                    </div>
                </Content>
            </div>
        );
    }
}

export default Main;