import { setWheel } from "./StateTracker.js"

const choiceHandler = (clickEvent) => {
    if (clickEvent.target.id === "wheel") {
        setWheel(parseInt(clickEvent.target.value))
    }
}

export const Wheels = async () => {
    const request = await fetch("http://localhost:8088/wheels")
    const wheels = await request.json()

    document.addEventListener("change", choiceHandler)

    return `<h2>Wheels</h2>
    <select id="wheel">
        <option value="0">Select an wheel style</option>
        ${
            wheels.map(
                (wheel) => {
                    return `<option value="${wheel.id}">${wheel.style}</option>`
                }
            ).join("")
        }
    </select>`
}