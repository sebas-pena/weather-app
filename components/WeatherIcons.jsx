import React from "react"
import { Image } from "react-native"

import cloud from "../assets/images/icons/cloud.png"
import clouds from "../assets/images/icons/clouds.png"
import fogDay from "../assets/images/icons/fog-day.png"
import fogNight from "../assets/images/icons/fog-night.png"
import storm from "../assets/images/icons/storm.png"
import sun from "../assets/images/icons/sun.png"
import moon from "../assets/images/icons/moon.png"
import lightRain from "../assets/images/icons/light-rain.png"
import heavyRain from "../assets/images/icons/heavy-rain.png"
import snow from "../assets/images/icons/snow.png"
import thermometerIcon from "../assets/images/icons/thermometer.png"
import windIcon from "../assets/images/icons/wind.png"
import moonriseIcon from "../assets/images/icons/moonrise.png"
import moonsetIcon from "../assets/images/icons/moonset.png"
import sunriseIcon from "../assets/images/icons/sunrise.png"
import sunsetIcon from "../assets/images/icons/sunset.png"
import humidityIcon from "../assets/images/icons/humidity.png"

const WeatherIcons = ({ id, style }) => {
	const Icons = {
		// Api codes
		"01d": sun,
		"01n": moon,
		"02d": cloud,
		"02n": cloud,
		"03d": clouds,
		"03n": clouds,
		"04d": clouds,
		"04n": clouds,
		"09d": heavyRain,
		"09n": heavyRain,
		"10d": lightRain,
		"10n": lightRain,
		"11d": storm,
		"11n": storm,
		"13d": snow,
		"13n": snow,
		"50d": fogDay,
		"50n": fogNight,
		// ------
		thermometer: thermometerIcon,
		wind: windIcon,
		moonrise: moonriseIcon,
		moonset: moonsetIcon,
		sunrise: sunriseIcon,
		sunset: sunsetIcon,
		humidity: humidityIcon,
	}
	return <Image source={Icons[id]} style={style} />
}

export default WeatherIcons
