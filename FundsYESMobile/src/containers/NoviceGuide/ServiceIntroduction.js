/* tool */
import React, { Component } from 'react';
import LoginStyle from './NoviceGuide.scss';

/* component */
import PageHeader from '../../manager/components/page_header/page_header';
import Footer from '../../manager/components/footer/footer';
class ServiceIntroduction extends Component {

    render() {
        return (
            <div className="login-main">
                <div>
                    <PageHeader />
                </div>
			         <Footer />
			     </div>
        );
    }
}

export default ServiceIntroduction;
