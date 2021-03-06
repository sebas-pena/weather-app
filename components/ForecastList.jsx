import React from "react"
import { ScrollView, View } from "react-native"
import ForecastItem from "./ForecastItem"

const ForecastList = ({ forecast, setDisplay }) => {
	return (
		<View style={{ padding: 10, height: 170 }}>
			<ScrollView horizontal>
				{forecast.map((item, index) => (
					<ForecastItem
						forecast={item}
						index={index}
						key={item.dt}
						setDisplay={setDisplay}
					/>
				))}
			</ScrollView>
		</View>
	)
}

export default ForecastList
