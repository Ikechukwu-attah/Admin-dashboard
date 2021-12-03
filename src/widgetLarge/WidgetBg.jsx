import React from 'react'
import './widgetBg.css'

export default function WidgetBg() {

    const Button = ({type})=>{
     
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.expressiveinfo.com/wp-content/uploads/2021/01/Bianka-Ojukwu-820x1024.jpg"
                         alt="Bianca ojukwu" className="widgetLgImg" />

                         <span className="widgetLgName">Bainca Ojukwu</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetlgAmount">$3,000</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.expressiveinfo.com/wp-content/uploads/2021/01/Bianka-Ojukwu-820x1024.jpg"
                         alt="Bianca ojukwu" className="widgetLgImg" />

                         <span className="widgetLgName">Bainca Ojukwu</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$3,000</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.expressiveinfo.com/wp-content/uploads/2021/01/Bianka-Ojukwu-820x1024.jpg"
                         alt="Bianca ojukwu" className="widgetLgImg" />

                         <span className="widgetLgName">Bainca Ojukwu</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetlgAmount">$3,000</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.expressiveinfo.com/wp-content/uploads/2021/01/Bianka-Ojukwu-820x1024.jpg"
                         alt="Bianca ojukwu" className="widgetLgImg" />

                         <span className="widgetLgName">Bainca Ojukwu</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetlgAmount">$3,000</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
