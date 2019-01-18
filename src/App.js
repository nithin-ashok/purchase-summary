import React, {Component} from 'react';
import Pricing from "./components/Pricing";
import Summary from "./components/Summary";
import Horizontal from "./components/Horizontal";
import Total from "./components/Total";
import Expander from "./components/Expander";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode.connect";
import './App.css';

class PurchaseSummary extends Component {

    constructor(props) {
        super(props)
        this.renderSummary= this.renderSummary.bind(this);
    }

    componentDidMount() {
        const {loadPurchaseSummary} = this.props;
        loadPurchaseSummary();
    }

    renderSummary() {
        const {pricing, itemDetails, loading} = this.props;
        const {total} = pricing;

        if(loading === "PURCHASE_SUMMARY") {
            return (<span>Loading ...</span>)
        }

        return(
            <>
                <Pricing
                    {...pricing}
                />

                <Horizontal/>
                <Total total={total} />
                <Expander
                    expandedTitle="See Item Details"
                    collapsedTitle="Hide Item Details"
                >
                    <ItemDetails
                        {...itemDetails}
                    />
                </Expander>
                <Horizontal/>
                <Expander
                    expandedTitle="Apply Promo Code"
                    collapsedTitle="Hide Promo Code"
                >
                    <PromoCode/>
                </Expander>
            </>
        )
    }

    render() {
        return (
            <div className="container">
                    <Summary>
                        {this.renderSummary()}
                    </Summary>
            </div>
        );
    }
}

export default PurchaseSummary;
