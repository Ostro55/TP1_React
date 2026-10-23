export async function fetchCards() {

    const url = "http://localhost:3001/cards"
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
    } else {
        return response.json() // Rien ne verifie la forme de la reponse
    }
}