
import { API_KEY, BASE_URL } from "../constants";
export async function getQuote(currency ='mxn'){
    try {
        const url =  `${BASE_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
        const response = await fetch(url)
        const result = await response.json()
        return result

    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getTrending () {
    try {
        const url =  `${BASE_URL}search/trending`
        const response = await fetch(url)
        const result = await response.json()
        return result

    } catch (error) {
        console.error(error)
        return null
    }
}