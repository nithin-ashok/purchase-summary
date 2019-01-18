import React from "react";
import Chair from "../assets/chair.jpg";

const LineItem = ({children}) => (<span className="line-item">{children}</span>);


const ItemDetails = ({item_name="", afterDisc_Price="", beforeDisc_Price="", quantity=""}) => (<table className="table">
    <tr>
        <td><img className="chair" src={Chair} /></td>
        <td className="text-right">
            <div className="text-left font-small">
                <LineItem>{item_name}</LineItem>
                <LineItem>
                    <div className="font-xsmall">
                        <span className="font-bold"> {`$${afterDisc_Price}`} </span>
                        <span className='align-right'>Qty: {quantity}</span>
                        <span className="line-item text-line-through font-darkgrey font-bold">{`$${beforeDisc_Price}`}</span>
                    </div>
                </LineItem>
            </div>
        </td>
    </tr>
</table>);

export default ItemDetails;
