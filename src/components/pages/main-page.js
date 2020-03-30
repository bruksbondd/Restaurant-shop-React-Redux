import React from 'react';
import MenuList from '../menu-list';

const MainPage = (props) => {
    return (
        <MenuList state={props.state} handleId={props.handleId} />
    )
}

export default MainPage;
