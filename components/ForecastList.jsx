import React from "react"
import { ScrollView, Dimensions, View } from "react-native"
import ForecastItem from "./ForecastItem"

const win = Dimensions.get("window")
const ForecastList = ({ forecast }) => {
	return (
		<ScrollView horizontal>
			<View style={{ width: win.width / 10 }}></View>
			{forecast.map((item) => (
				<ForecastItem forecast={item} />
			))}
			<View style={{ width: win.width / 10 - 10 }}></View>
		</ScrollView>
	)
}

export default ForecastList
