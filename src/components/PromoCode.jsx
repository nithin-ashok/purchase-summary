import React from "react";

class PromoCode extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLabel = this.getLabel.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        const {validatePromoCode} = this.props;
        e.preventDefault();
        validatePromoCode(this.state.value);
    }

    getLabel() {
        const {promoApplied, invalidPromo} = this.props;
        if(invalidPromo) {
            return (<span className="font-red"> Invalid Promo</span>)
        }

        if(promoApplied) {
            return (<span className="font-red">Promo Already Applied</span>)
        }

        return "Promo Code";

    }

    render() {
        const {label, loading} = this.props;
        const submitLabel = loading === "PROMO_CODE" ? "Applying..." : "Apply";
        return(
            <form onSubmit={this.handleSubmit} className="form-padding">
                <label htmlFor="promo" className="font-darkgrey font-bold font-small">
                    {this.getLabel()}
                </label>
                <br />
                <input id="promo" className="form-input-text" onChange={this.handleChange} value={this.state.value} />
                <input className="form-input-submit" type="submit" value={submitLabel} />
            </form>
        )
    }

}

export default PromoCode;