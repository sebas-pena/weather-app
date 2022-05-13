import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const useForecast = () => {
	const [weather, setWeather] = useState(null)

	useEffect(() => {
		AsyncStorage.getItem("weather").then((weather) => {
			if (weather) {
				weather = JSON.parse(weather)
				const timestamp = new Date(weather.timestamp)

				if (+timestamp + 600000 > +new Date()) {
					setWeather(weather.data)
					return
				}
			}
			fetch(
				"https://api.openweathermap.org/data/2.5/onecall?lat=-34.8335&lon=-56.1674&units=metric&appid=b5ba6873c874531bc8e0b376c9253158&exclude=minutely"
			)
				.then((res) => res.json())
				.then((data) => {
					AsyncStorage.setItem(
						"weather",
						JSON.stringify({ data: data, timestamp: new Date().getTime() })
					)
					setWeather(data)
				})
		})
	}, [])
	return weather
}
