import { View, StyleSheet, Dimensions, Image } from "react-native"
import StyledText from "./StyledText"

// images
import thermometerIcon from "../assets/images/icons/thermometer.png"
import windIcon from "../assets/images/icons/wind.png"
import moonriseIcon from "../assets/images/icons/moonrise.png"
import moonsetIcon from "../assets/images/icons/moonset.png"
import sunriseIcon from "../assets/images/icons/sunrise.png"
import sunsetIcon from "../assets/images/icons/sunset.png"
import humidityIcon from "../assets/images/icons/humidity.png"
import WeatherIcons from "./WeatherIcons"
const win = Dimensions.get("window")

const ForecastDisplay = ({ display }) => {
	display || (display = { ...responseExample.daily[0], day: "Today" })
	const {
		day,
		weather,
		humidity,
		wind_speed,
		sunset,
		sunrise,
		moonset,
		moonrise,
	} = display
	const timeOfDayKeys = ["day", "morn", "eve", "night"]
	const timeOfDay = {
		day: "Day",
		morn: "Morning",
		eve: "Evening",
		night: "Night",
	}

	const sunRise = new Date(sunrise * 1000).getHours()
	const sunSet = new Date(sunset * 1000).getHours()
	const moonRise = new Date(moonrise * 1000).getHours()
	const moonSet = new Date(moonset * 1000).getHours()

	const windSpeed = Math.round(wind_speed)
	return (
		<View style={styles.container}>
			<StyledText medium bold>
				{day}
			</StyledText>
			<View
				style={[styles.containerHorizontal, { flex: 1, width: win.width - 20 }]}
			>
				<View
					style={{
						justifyContent: "space-around",
						paddingLeft: 20,
						width: 100,
						alignItems: "flex-start",
					}}
				>
					<View style={styles.contentCenter}>
						<View style={[styles.containerHorizontal, styles.contentCenter]}>
							<Image source={humidityIcon} style={styles.icon} />
							<StyledText small>{humidity}%</StyledText>
						</View>
						<StyledText extrasmall bold>
							Humidity
						</StyledText>
					</View>

					<View style={styles.contentCenter}>
						<View style={[styles.containerHorizontal, styles.contentCenter]}>
							<Image source={sunriseIcon} style={styles.icon} />
							<StyledText small>{sunRise}</StyledText>
						</View>
						<StyledText extrasmall bold>
							Sunrise
						</StyledText>
					</View>

					<View style={styles.contentCenter}>
						<View style={[styles.containerHorizontal, styles.contentCenter]}>
							<Image source={sunsetIcon} style={styles.icon} />
							<StyledText small>{sunSet}</StyledText>
						</View>
						<StyledText extrasmall bold>
							Sunset
						</StyledText>
					</View>
				</View>

				<View style={[styles.contentCenter, { flex: 1 }]}>
					<WeatherIcons
						id={weather[0].icon}
						style={{ height: 150, width: 150 }}
					/>
				</View>

				<View
					style={{
						justifyContent: "space-around",
						paddingRight: 20,
						width: 100,
						alignItems: "flex-end",
					}}
				>
					<View>
						<View style={styles.contentCenter}>
							<View style={[styles.containerHorizontal, styles.contentCenter]}>
								<Image source={windIcon} style={styles.icon} />
								<StyledText small>{windSpeed} m/s</StyledText>
							</View>
							<StyledText extrasmall bold>
								Wind
							</StyledText>
						</View>
					</View>

					<View style={styles.contentCenter}>
						<View style={[styles.containerHorizontal, styles.contentCenter]}>
							<Image source={moonriseIcon} style={styles.icon} />
							<StyledText small>{moonRise}</StyledText>
						</View>
						<StyledText extrasmall bold>
							Moonrise
						</StyledText>
					</View>

					<View style={styles.contentCenter}>
						<View style={[styles.containerHorizontal, styles.contentCenter]}>
							<Image source={moonsetIcon} style={styles.icon} />
							<StyledText small>{moonSet}</StyledText>
						</View>
						<StyledText extrasmall bold>
							Moonset
						</StyledText>
					</View>
				</View>
			</View>
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
		width: 18,
		height: 18,
		marginRight: 5,
		resizeMode: "cover",
	},
	contentCenter: {
		alignItems: "center",
		justifyContent: "center",
	},
})

export default ForecastDisplay
