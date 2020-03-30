import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';

class MenuList extends Component {



    render() {
        const menuListItem = this.props.state.map(item => {

           return <MenuListItem key={item.id} state={item} handleId={this.props.handleId} />
        })

        return (
            <ul className="menu__list">
                {menuListItem}
            </ul>
        )
    }
};


export default MenuList;
