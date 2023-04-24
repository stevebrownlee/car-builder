import { setInterior } from "./StateTracker.js"

const choiceHandler = (clickEvent) => {
    if (clickEvent.target.id === "interior") {
        setInterior(parseInt(clickEvent.target.value))
    }
}

export const Interiors = async () => {
    const request = await fetch("http://localhost:8088/interiors")
    const interiors = await request.json()

    document.addEventListener("change", choiceHandler)

    return `<h2>Interior</h2>
        <select id="interior">
            <option value="0">Select an interior material</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.material}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
