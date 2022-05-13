import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import WeatherIcons from "./WeatherIcons"
const ForecastDisplayInfo = ({ icon, value, title }) => {
	return (
		<View style={styles.contentCenter}>
			<View style={[styles.containerHorizontal, styles.contentCenter]}>
				<WeatherIcons id={icon} style={styles.icon} />
				<StyledText small>{value}</StyledText>
			</View>
			<StyledText extrasmall bold>
				{title}
			</StyledText>
		</View>
	)
}

export default ForecastDisplayInfo

const styles = StyleSheet.create({
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
