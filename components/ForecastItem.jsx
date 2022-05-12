import React from "react"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"

import arrow from "../assets/images/icons/arrow.png"
import WeatherIcons from "./WeatherIcons"

const ForecastItem = ({ forecast, index, setDisplay }) => {
	const { dt, temp, weather } = forecast
	let day = new Date(dt * 1000).getDay()

	const dayList = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]

	switch (index) {
		case 0:
			day = "Today"
			break
		case 1:
			day = "Tomorrow"
			break
		default:
			day = dayList[day]
	}

	const handlePress = () => {
		setDisplay({ ...forecast, day })
	}

	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<StyledText extraSmall bold>
				{day}
			</StyledText>
			<WeatherIcons
				id={weather[0].icon}
				style={{ height: 40, width: 40 }}
				resizeMode="cover"
			/>
			<StyledText extraSmall bold>
				{Math.floor(temp.day)}°
			</StyledText>
			<View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
				<View>
					<Image
						source={arrow}
						style={[
							styles.arrows,
							{
								transform: [{ rotateZ: "180deg" }],
							},
						]}
					/>
					<StyledText>{Math.floor(temp.min)}°</StyledText>
				</View>
				<View style={{ flexGrow: 1 }}></View>
				<View>
					<Image source={arrow} style={styles.arrows} />
					<StyledText>{Math.floor(temp.max)}°</StyledText>
				</View>
			</View>
		</TouchableOpacity>
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
	arrows: {
		height: 16,
		width: 16,
	},
})
