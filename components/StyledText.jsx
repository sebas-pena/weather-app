import { Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
	text: {
		color: "#fff",
		fontFamily: "sans-serif",
	},
	small: {
		fontSize: 16,
	},
	medium: {
		fontSize: 30,
	},
	large: {
		fontSize: 100,
	},
	light: {
		fontFamily: "sans-serif-light",
	},
	thin: {
		fontFamily: "sans-serif-thin",
	},
	bold: {
		fontFamily: "sans-serif-medium",
	},
	regular: {
		fontFamily: "sans-serif",
	},
})

const StyledText = ({
	children,
	small,
	medium,
	large,
	style,
	bold,
	light,
	regular,
}) => {
	const TextStyles = [
		styles.text,
		small && styles.small,
		medium && styles.medium,
		large && styles.large,
		bold && styles.bold,
		light && styles.light,
		regular && styles.regular,
		style,
	]
	return <Text style={TextStyles}>{children}</Text>
}

export default StyledText
