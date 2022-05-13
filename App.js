import { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { useForecast } from "./hooks/useForecast"
import DayCycleBackground from "./components/DayCycleBackground"
import StyledText from "./components/StyledText"

import ForecastList from "./components/ForecastList"
import ForecastDisplay from "./components/ForecastDisplay"

export default function App() {
	const weather = useForecast()

	const [display, setDisplay] = useState(null)

	useEffect(() => {
		if (weather) {
			setDisplay({ ...weather.daily[0], day: "Today" })
		}
	}, [weather])

	return (
		<DayCycleBackground>
			<View style={{ alignItems: "center" }}>
				<StatusBar style="auto" />
				<StyledText medium>Now</StyledText>
				<StyledText large light style={{ marginBottom: -10 }}>
					{weather && Math.floor(weather.current.temp)}°
				</StyledText>
				<StyledText medium light>
					{weather && weather.current.weather[0].description}
				</StyledText>
			</View>
			{display && (
				<>
					<ForecastDisplay display={display} />
					<ForecastList forecast={weather.daily} setDisplay={setDisplay} />
				</>
			)}
		</DayCycleBackground>
	)
}
