import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import Moment from "moment"
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	Dimensions,
} from "react-native"
import responseExample from "./responseExample.json"
import { useGetCurrentWeather } from "./hooks/useGetCurrentWeather"
import DayCycleBackground from "./components/DayCycleBackground"
import StyledText from "./components/StyledText"
const win = Dimensions.get("window")

// LIMPIAR
import ForecastList from "./components/ForecastList"

export default function App() {
	/*   const weather = useGetCurrentWeather()
	 */

	/*   weather && console.log(weather)
	 */

	return (
		<DayCycleBackground>
			<StatusBar style="auto" />
			<View
				style={{
					flex: 1,
					width: "100%",
					alignItems: "center",
					paddingTop: "20%",
				}}
			>
				<StyledText large light style={{ marginBottom: -10 }}>
					{Math.floor(responseExample.current.temp)}°
				</StyledText>
				<StyledText medium light>
					{responseExample.current.weather[0].description}
				</StyledText>
				<TextInput
					placeholder="Enter your city"
					style={styles.input}
					onChangeText={(e) => {}}
				/>
				<View>
					<ForecastList forecast={responseExample.daily} />
				</View>
			</View>
		</DayCycleBackground>
	)
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#fff",
		width: "80%",
		height: 50,
		paddingStart: 20,
		borderRadius: 10,
	},
	degrees: {
		fontSize: 100,
		color: "#fff",
		paddingTop: 70,
		paddingBottom: 70,
	},
	icon: {
		width: 100,
		height: 100,
		backgroundColor: "grey",
	},
})
