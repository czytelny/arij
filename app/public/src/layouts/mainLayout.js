import React from 'react';
import { Link } from 'react-router';

import TitleBar from './titleBar/titleBar'
import ActionsBar from './actionsBar/actionsBar'
import Breadcrumbs from './breadcrumbs/breadcrumbs'
import SideNavigation from './sideNavigation/sideNavigation'

const MainLayout = React.createClass({
    render() {
        return (
          <div className="main-layout-container">
            <TitleBar />
            <ActionsBar />
            <div className="row">
                <SideNavigation />
                <div className="col-sm-10 mainView">
                    <Breadcrumbs />
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
          </div>
        );
    }
});

export default MainLayout;
