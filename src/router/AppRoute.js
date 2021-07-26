import React, {Component,Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import TermsConditionPage from "../pages/Terms&ConditionPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import UpdatePage from "../pages/UpdatePage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/Refund" component={RefundPolicyPage}/>
                    <Route exact path="/Terms" component={TermsConditionPage}/>
                    <Route exact path="/Privacy" component={PrivacyPolicyPage}/>
                    <Route exact path="/Update" component={UpdatePage}/>

                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;