import { useState, useEffect } from "react"

export const useGetCurrentWeather = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Montevideo&units=metric&appid=b5ba6873c874531bc8e0b376c9253158"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
      })
  }, [])
  return weather
}
