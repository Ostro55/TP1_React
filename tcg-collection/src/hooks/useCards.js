import {useEffect, useState} from "react";
import {fetchCards} from "../api/cards.js";

export function useCards() {
    const [attempt, setAttempt] = useState(0)
    const [request, setRequest] = useState({status: "loading"})

    useEffect(() => {
        let ignore = false
        fetchCards()
            .then((response) => {
                if (!ignore) {
                    setRequest({status: "success", cards: response})
                }
            })
            .catch((error) => {
                if (!ignore) {
                    setRequest({status: "error", message: error instanceof Error ? error.message : String(error)})
                }
            })

        return () => {
            ignore = true
        }
    }, [attempt])

    const handleRetry = () => {
        setRequest({status: "loading"})
        setAttempt((prev) => prev + 1)
    }

    const handleQuantityChange = (id, delta) => {
        setRequest((previous) => {
            if (previous.status !== "success") return previous
            return {
                ...previous,
                cards: previous.cards.map(card => card.id === id ? {...card, quantity: Math.max(0, card.quantity + delta)} : card)
            }
        })
    }

    const handleRemove = (id) => {
        setRequest((previous) => {
            if (previous.status !== "success") return previous
            return {
                ...previous,
                cards: previous.cards.filter(card => card.id !== id)
            }
        })
    }

    return {request, handleRetry, handleQuantityChange, handleRemove}
}