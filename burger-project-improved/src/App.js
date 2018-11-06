import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignUp();
    }

    render() {
        return (
            <div>
                <Layout>
                    {/*{routes}*/}
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route exact path="/orders"
                               render={() => (this.props.isAuthenticated ? (<Orders/>) : (<Redirect to="/"/>))}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                        <Route path="/auth" component={Auth}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
