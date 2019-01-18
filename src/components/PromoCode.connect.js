import {connect} from "react-redux";
import  {validatePromoCode} from "../actions/actions";
import PromoCode from "./PromoCode";

const mapStateToProps = ({invalidPromo,promoApplied, loading}) => ({
    invalidPromo,
    promoApplied,
    loading
});

const mapDispatchToProps = (dispatch)=>({
    validatePromoCode: (promo) => dispatch(validatePromoCode(promo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode);