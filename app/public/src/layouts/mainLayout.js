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
            <header className="page-header">
              <TitleBar />
              <ActionsBar />
            </header>
            <div className="page-content">
                <SideNavigation />
                <div className="content-container">
                    <Breadcrumbs />
                    <main className="main-content">
                        {this.props.children}
                    </main>
                </div>
            </div>
            <footer className="page-footer">
              <small>Arij, 2017</small>
            </footer>
          </div>
        );
    }
});

export default MainLayout;
