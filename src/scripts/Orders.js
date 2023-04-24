const buildSection = async (order) => {
    const orderPaints = await fetch(`http://localhost:8088/orderPaints?orderId=${order.id}&_expand=paint`)
        .then(r => r.json())

    const paintNames = orderPaints.reduce((c, n) => c += `${c === "" ? "" : " and "} ${n.paint.color}`, "")
    const paintCost = orderPaints.reduce((c, n) => c += n.paint.price, 0)

    return `<section class="order">
            ${paintNames} car with
            ${order.wheel.style} wheels,
            ${order.interior.material} interior,
            and the ${order.technology.package}
            for a total cost of
            ${(paintCost + order.technology.price + order.interior.price + order.wheel.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })
            }
        </section>`
}


export const Orders = async () => {
    const request = await fetch("http://localhost:8088/orders?_embed=orderPaints&_expand=wheel&_expand=technology&_expand=interior")
    const orders = await request.json()

    let sectionPromises = orders.map(buildSection)
    let sections = await Promise.all(sectionPromises)
    const html = sections.join("")

    return html
}

