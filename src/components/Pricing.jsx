import React from "react";

const Pricing = ({subtotal, savings, tax, zip}) => {
    return (
        <table className="table">
            <tbody>
            <tr>
                <td>Subtotal</td>
                <td className="text-right font-bold">{`$${subtotal}`}</td>
            </tr>
            <tr>
                <td className="savings tooltip">Pickup savings
                    <span className="tooltiptext">
                       Picking up your order in the store cut costs, and we pass the savings on to you.
                   </span>
                </td>
                <td className="text-right font-bold font-red">{`-$${savings}`}</td>
            </tr>
            <tr>
                <td>Est. taxes & Fees
                    <span className="zip">(Based on {zip})</span>
                </td>
                <td className="text-right font-bold">{`$${tax}`}</td>
            </tr>
            </tbody>
        </table>
    );
}

export default Pricing;