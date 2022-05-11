import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Alert,
	Dimensions,
	TextInput,
} from "react-native"
import Constants from "expo-constants"
import MorningBackground from "./assets/images/backgrounds/morning.png"
import Icon from "./assets/images/icons/clouds.png"
import NoonBackground from "./assets/images/backgrounds/noon.png"
import NightBackground from "./assets/images/backgrounds/night.png"
import MidightBackground from "./assets/images/backgrounds/midnight.png"
import LateBackground from "./assets/images/backgrounds/late.png"
import MornignEarlyBackground from "./assets/images/backgrounds/morning-early.png"
import MorningDarkBackground from "./assets/images/backgrounds/morning-dark.png"
import { useGetCurrentWeather } from "./hooks/useGetCurrentWeather"

const win = Dimensions.get("window")
export default function App() {
	/*   const weather = useGetCurrentWeather()
	 */
	let hours = new Date().getHours()
	let background = null
	if (hours >= 6 && hours < 12) {
		background = MorningBackground
	} else if (hours >= 12 && hours < 18) {
		background = NoonBackground
	} else {
		background = NightBackground
	}
	/*   weather && console.log(weather)
	 */

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.backgroundCtn}>
				<Image source={background} style={styles.background} />
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					paddingTop: 150,
				}}
			>
				<Image
					source={Icon}
					style={{ height: 75, width: 75, marginRight: 10 }}
				/>
				<Text style={styles.degrees}>20°</Text>
			</View>
			<TextInput
				placeholder="Enter your city"
				style={styles.input}
				onChangeText={(e) => {}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
		alignItems: "center",
	},
	backgroundCtn: {
		position: "absolute",
		top: 0,
		left: 0,
		width: win.width,
		height: win.height,
	},
	background: {
		height: "100%",
		width: "100%",
		resizeMode: "cover",
		marginTop: Constants.statusBarHeight,
	},
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
		fontFamily: "sans-serif",
	},
	icon: {
		width: 100,
		height: 100,
		backgroundColor: "grey",
	},
})
