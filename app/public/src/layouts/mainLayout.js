import React from 'react';
import { Link } from 'react-router';

import Navbar from './navbar/navbar'
import Sidenav from './sideNavigation/sidenav'

const MainLayout = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <Sidenav/>
                </div>
                <div className="col-sm-10 mainView">
                    <Navbar/>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
});

export default MainLayout;