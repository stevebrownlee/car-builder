import { getWheels, setWheel } from "./database.js"

document.addEventListener("change", clickEvent => {
    if (clickEvent.target.id === "wheel") {
        setWheel(parseInt(clickEvent.target.value))
    }
})

const wheels = getWheels()

export const Wheels = () => {
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