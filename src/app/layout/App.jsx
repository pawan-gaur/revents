import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/testarea/TestComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route
                    exact
                    path="/events/:id"
                    component={EventDetailedPage}
                  />
                  <Route exact path="/people" component={PeopleDashboard} />
                  <Route
                    exact
                    path="/profile/:id"
                    component={UserDetailedPage}
                  />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route
                    exact
                    path={['/createEvent', '/manage/:id']}
                    component={EventForm}
                  />
                  <Route exact path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
