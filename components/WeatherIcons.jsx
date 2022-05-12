import React from "react"
import { Image } from "react-native"

import cloud from "../assets/images/icons/cloud.png"
import clouds from "../assets/images/icons/clouds.png"
import fogDay from "../assets/images/icons/fog-day.png"
import fogNight from "../assets/images/icons/fog-night.png"
import storm from "../assets/images/icons/storm.png"
import cloudLighting from "../assets/images/icons/cloud-lighting.png"
import sun from "../assets/images/icons/sun.png"
import moon from "../assets/images/icons/moon.png"
import lightRain from "../assets/images/icons/light-rain.png"
import heavyRain from "../assets/images/icons/heavy-rain.png"
import snow from "../assets/images/icons/snow.png"

const WeatherIcons = ({ id, style }) => {
	const Icons = {
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
	}
	return <Image source={Icons[id]} style={style} />
}

export default WeatherIcons
