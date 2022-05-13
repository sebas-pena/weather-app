import { View, StyleSheet, Dimensions, Image } from "react-native"
import ForecastDisplayInfo from "./ForecastDisplayInfo"
import StyledText from "./StyledText"

// images

import WeatherIcons from "./WeatherIcons"
const win = Dimensions.get("window")

const ForecastDisplay = ({ display }) => {
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
					<ForecastDisplayInfo
						title="Humidity"
						value={humidity + "%"}
						icon="humidity"
					/>
					<ForecastDisplayInfo title="Sunrise" value={sunRise} icon="sunrise" />
					<ForecastDisplayInfo title="Sunset" value={sunSet} icon="sunset" />
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
					<ForecastDisplayInfo
						title="Wind Speed"
						value={windSpeed + " m/s"}
						icon="wind"
					/>
					<ForecastDisplayInfo
						title="Moonrise"
						value={moonRise}
						icon="moonrise"
					/>
					<ForecastDisplayInfo title="Moonset" value={moonSet} icon="moonset" />
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
							<WeatherIcons id="thermometer" style={styles.icon} />
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
