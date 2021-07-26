import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Update from "../components/UpdateSection/Update";
import Footer from "../components/Footer/Footer";

class UpdatePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Update"/>
                <Update />
                <Footer/>
            </Fragment>
        );
    }
}

export default UpdatePage;