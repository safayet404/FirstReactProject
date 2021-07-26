import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import Footer from "../components/Footer/Footer";

class PrivacyPolicyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Policy" />
                <PageTop pagetitle="Privacy Policy" />
                <PrivacyPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPolicyPage;