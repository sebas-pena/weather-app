import { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { View, Dimensions } from "react-native"
import responseExample from "./responseExample.json"
import { useGetCurrentWeather } from "./hooks/useGetCurrentWeather"
import DayCycleBackground from "./components/DayCycleBackground"
import StyledText from "./components/StyledText"
const win = Dimensions.get("window")

// LIMPIAR
import ForecastList from "./components/ForecastList"
import ForecastDisplay from "./components/ForecastDisplay"

export default function App() {
	/*   const weather = useGetCurrentWeather()
	 */

	/*   weather && console.log(weather)
	 */

	const [forecastDisplay, setForecastDisplay] = useState(null)

	return (
		<DayCycleBackground>
			<View style={{ alignItems: "center" }}>
				<StatusBar style="auto" />
				<StyledText medium>Now</StyledText>
				<StyledText large light style={{ marginBottom: -10 }}>
					{Math.floor(responseExample.current.temp)}°
				</StyledText>
				<StyledText medium light>
					{responseExample.current.weather[0].description}
				</StyledText>
			</View>
			<ForecastDisplay display={forecastDisplay} />
			<ForecastList
				forecast={responseExample.daily}
				setDisplay={setForecastDisplay}
			/>
		</DayCycleBackground>
	)
}
