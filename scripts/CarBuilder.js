import { addCustomOrder } from "./database.js"
import { Interiors } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarBuilder = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${Paints()}
            </section>
            <section class="choices__sizes options">
                ${Interiors()}
            </section>
            <section class="choices__styles options">
                ${Wheels()}
            </section>
            <section class="choices__styles options">
                ${Technologies()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}
