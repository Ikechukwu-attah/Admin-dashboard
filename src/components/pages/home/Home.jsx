import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './home.css'
import {Userdata} from '../../../dummyData';
import WidgetSm from '../../../widgetSmall/WidgetSm';
import WidgetBg from '../../../widgetLarge/WidgetBg';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={Userdata} title="User Analytics" grid dataKey="Active User" />

            <div className="homeWidgets">
                <WidgetSm />
                <WidgetBg />
            </div>
        </div>
    )
}
