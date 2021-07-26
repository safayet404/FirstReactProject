import React, {Component,Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/Footer/Footer";

class RefundPolicyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="RefundPolicy" />
                <PageTop pagetitle="Refund Policy" />
                <RefundPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPolicyPage;