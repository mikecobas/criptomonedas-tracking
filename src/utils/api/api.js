
import { API_KEY, BASE_URL } from "../constants";
export async function getQuote(){
    try {
        const url =  `${BASE_URL}tickers/`

        const response = await fetch(url)
        const result = await response.json()
        return result

    } catch (error) {
        console.error(error)
        return null
    }
}