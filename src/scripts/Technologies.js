import { setTechnology } from "./StateTracker.js"

const choiceHandler = (clickEvent) => {
    if (clickEvent.target.id === "tech") {
        setTechnology(parseInt(clickEvent.target.value))
    }
}

export const Technologies = async () => {
    const request = await fetch("http://localhost:8088/technologies")
    const techs = await request.json()

    document.addEventListener("change", choiceHandler)

    return `<h2>Technologies</h2>
    <select id="tech">
        <option value="0">Select a technology package</option>
        ${
            techs.map(
                (tech) => {
                    return `<option value="${tech.id}">${tech.package}</option>`
                }
            ).join("")
        }
    </select>`
}
