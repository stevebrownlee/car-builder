import { updatePaint } from "./StateTracker.js"

const choiceHandler = (clickEvent) => {
    if (clickEvent.target.dataset.for === "paint") {
        updatePaint(parseInt(clickEvent.target.value))
    }
}

export const Paints = async () => {
    const request = await fetch("http://localhost:8088/paints")
    const paints = await request.json()

    document.addEventListener("change", choiceHandler)

    return `<h2>Paints</h2>
        ${
            paints.map(
                (paint) => {
                    return `<div>
                        <input type="checkbox" data-for="paint" value=${paint.id} /> ${paint.color}
                    </div>`
                }
            ).join("")
        }
    </select>`
}
