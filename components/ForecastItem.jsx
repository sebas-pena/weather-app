import React from "react"
import { View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText"

import arrow from "../assets/images/icons/arrow.png"
import WeatherIcons from "./WeatherIcons"

const Icons = {}

const ForecastItem = ({ forecast }) => {
	const { dt, temp, weather } = forecast
	const day = new Date(dt * 1000).getDay()

	const dayList = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]

	return (
		<View style={styles.container}>
			<StyledText small bold>
				{dayList[day]}
			</StyledText>
			<WeatherIcons
				id={weather[0].icon}
				style={{ height: 40, width: 40 }}
				resizeMode="cover"
			/>
			<StyledText small bold>
				{Math.floor(temp.day)}°
			</StyledText>
			<View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
				<View>
					<Image
						source={arrow}
						style={{
							height: 20,
							width: 20,
							transform: [{ rotateZ: "180deg" }],
						}}
					/>
					<StyledText>{Math.floor(temp.min)}°</StyledText>
				</View>
				<View style={{ flexGrow: 1 }}></View>
				<View>
					<Image
						source={arrow}
						style={{
							height: 20,
							width: 20,
						}}
					/>
					<StyledText>{Math.floor(temp.max)}°</StyledText>
				</View>
			</View>
		</View>
	)
}

export default ForecastItem

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: 100,
		marginRight: 10,
		backgroundColor: "rgba(0,0,0,0.5)",
		height: 150,
		borderRadius: 10,
	},
})
