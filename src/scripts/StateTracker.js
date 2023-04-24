let applicationState = {
    chosenPaints: new Set(),
    wheelId: 0,
    interiorId: 0,
    technologyId: 0
}


export const updatePaint = (id) => {
    applicationState.chosenPaints.has(id)
        ? applicationState.chosenPaints.delete(id)
        : applicationState.chosenPaints.add(id)

    console.log(applicationState)
}

export const setWheel = (id) => {
    applicationState.wheelId = id
    console.log(applicationState)
}

export const setInterior = (id) => {
    applicationState.interiorId = id
    console.log(applicationState)
}

export const setTechnology = (id) => {
    applicationState.technologyId = id
    console.log(applicationState)
}

export const addCustomOrder = async () => {

    const orderToPost = {
        wheelId: applicationState.wheelId,
        interiorId: applicationState.interiorId,
        technologyId: applicationState.technologyId
    }

    const orderResponse = await fetch("http://localhost:8088/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderToPost)
    })
    const createdOrder = await orderResponse.json()

    for (const chosenPaintId of applicationState.chosenPaints) {
        await fetch("http://localhost:8088/orderPaints", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                paintId: chosenPaintId,
                orderId: createdOrder.id
            })
        })
    }

    applicationState = {
        chosenPaints: new Set(),
        wheelId: 0,
        interiorId: 0,
        technologyId: 0
    }

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
