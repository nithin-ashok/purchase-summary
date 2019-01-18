import {connect} from "react-redux";
import PurchaseSummary from "./App";
import  {getPurchaseSummary} from "./actions/actions";

const mapStateToProps = (state) => {
    const { purchaseSummary, loading } = state;
    const { pricing={},itemDetails = {}} = purchaseSummary;
    return {
        pricing,
        itemDetails,
        loading
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadPurchaseSummary: () => dispatch(getPurchaseSummary())
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary);

