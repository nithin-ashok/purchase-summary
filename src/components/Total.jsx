import React from "react";


const Total = ({total}) => (
    <table className="table">
        <tbody>
        <tr className="font-bold">
            <td className="font-large">
                Est. total
            </td>
            <td className="text-right font-xlarge">
                {`$${total}`}
            </td>
        </tr>
        </tbody>
    </table>
);
export default Total;