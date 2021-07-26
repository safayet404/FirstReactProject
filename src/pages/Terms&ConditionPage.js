import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import TermsCondition from "../components/Terms&Condition/Terms&Condition";
import Footer from "../components/Footer/Footer";

class TermsConditionPage extends Component {
    render() {
        return (
            <Fragment>

                <TopNavigation title="Terms&Condition"/>
                <PageTop pagetitle="Terms & Condition"/>
                <TermsCondition/>
                <Footer/>

            </Fragment>
        );
    }
}

export default TermsConditionPage;