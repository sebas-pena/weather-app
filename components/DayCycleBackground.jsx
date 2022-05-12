import { ImageBackground, Dimensions, StyleSheet } from "react-native"
import Constants from "expo-constants"

// BACKGROUNDS
import MorningDarkBackground from "../assets/images/backgrounds/morning-dark.png"
import MornignEarlyBackground from "../assets/images/backgrounds/morning-early.png"
import MorningBackground from "../assets/images/backgrounds/morning.png"
import NoonBackground from "../assets/images/backgrounds/noon.png"
import LateBackground from "../assets/images/backgrounds/late.png"
import NightBackground from "../assets/images/backgrounds/night.png"
import MidightBackground from "../assets/images/backgrounds/midnight.png"

const win = Dimensions.get("window")
const DayCycleBackground = ({ children, style }) => {
	const backgrounds = {
		morningEarly: MornignEarlyBackground,
		morning: MorningBackground,
		morningDark: MorningDarkBackground,
		noon: NoonBackground,
		late: LateBackground,
		night: NightBackground,
		midnight: MidightBackground,
	}

	const hour = new Date().getHours()
	let time
	if (hour >= 5 && hour < 8) {
		time = "morningDark"
	} else if (hour >= 8 && hour < 12) {
		time = "morningEarly"
	} else if (hour >= 12 && hour < 15) {
		time = "morning"
	} else if (hour >= 15 && hour < 18) {
		time = "noon"
	} else if (hour >= 18 && hour < 20) {
		time = "late"
	} else if (hour >= 20 && hour < 24) {
		time = "night"
	} else if (hour >= 0 && hour < 5) {
		time = "midnight"
	}

	const styles = StyleSheet.create({
		container: {
			width: win.width,
			height: win.height,
			marginTop: Constants.statusBarHeight,
			alignItems: "center",
			paddingVertical: 20,
		},
	})
	return (
		<ImageBackground
			style={[styles.container, style]}
			source={backgrounds[time]}
			resizeMode="cover"
		>
			{children}
		</ImageBackground>
	)
}

export default DayCycleBackground
