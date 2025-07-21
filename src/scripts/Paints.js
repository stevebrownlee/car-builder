import { updatePaint } from "./StateTracker.js"
import { renderAsHTML } from "./utils.js"

const choiceHandler = (clickEvent) => {
    if (clickEvent.target.dataset.for === "paint") {
        updatePaint(parseInt(clickEvent.target.value))
    }
}

export const Paints = async () => {
    const paints = await (await fetch("http://localhost:8088/paints")).json()

    document.addEventListener("change", choiceHandler)

    return `<h2>Paints</h2>
        ${
            renderAsHTML(
                paints,
                (paint) => `<div> <input type="checkbox" data-for="paint" value=${paint.id} /> ${paint.color} </div>`
            )
        }
    </select>`
}
