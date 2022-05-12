import { View, StyleSheet, Dimensions, Image } from "react-native"
import StyledText from "./StyledText"

import responseExample from "../responseExample.json"

// images
import thermometerIcon from "../assets/images/icons/thermometer.png"
import uvIcon from "../assets/images/icons/uv-index.png"
import windIcon from "../assets/images/icons/wind.png"
import windsockIcon from "../assets/images/icons/windsock.png"
import moonriseIcon from "../assets/images/icons/moonrise.png"
import moonset from "../assets/images/icons/moonset.png"
import sunrise from "../assets/images/icons/sunrise.png"
import sunset from "../assets/images/icons/sunset.png"
const win = Dimensions.get("window")
const ForecastDisplay = ({ display }) => {
	console.log(display)
	display || (display = { ...responseExample.daily[0], day: "Today" })
	const { day } = display
	console.log("CURRENT", display)
	const timeOfDayKeys = ["day", "morn", "eve", "night"]
	const timeOfDay = {
		day: "Day",
		morn: "Morning",
		eve: "Evening",
		night: "Night",
	}

	return (
		<View style={styles.container}>
			<StyledText medium bold>
				{day}
			</StyledText>
			<View style={styles.containerHorizontal}>
				{timeOfDayKeys.map((time, index) => (
					<View
						key={index}
						style={{
							alignItems: "center",
							flexGrow: 1,
							paddingVertical: 10,
						}}
					>
						<View
							style={[styles.containerHorizontal, { alignItems: "center" }]}
						>
							<Image source={thermometerIcon} style={styles.icon} />
							<StyledText small>{Math.floor(display.temp[time])}°</StyledText>
						</View>
						<StyledText samll bold>
							{timeOfDay[time]}
						</StyledText>
					</View>
				))}
			</View>
			<StyledText small>Wind</StyledText>
			<View style={styles.containerHorizontal}></View>
			<StyledText small>Humidity</StyledText>
			<View style={styles.containerHorizontal}></View>
			<StyledText small>Sunrise</StyledText>
			<View style={styles.containerHorizontal}></View>
			<StyledText small>Sunset</StyledText>
			<View style={styles.containerHorizontal}></View>
			<StyledText small>Pressure</StyledText>
			<View style={styles.containerHorizontal}></View>
			<StyledText small>Uvi</StyledText>
			<View style={styles.containerHorizontal}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginVertical: 20,
		paddingVertical: 10,
		width: win.width - 20,
		borderRadius: 10,
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	containerHorizontal: {
		flexDirection: "row",
	},
	icon: {
		width: 16,
		height: 16,
		resizeMode: "cover",
	},
})

export default ForecastDisplay
