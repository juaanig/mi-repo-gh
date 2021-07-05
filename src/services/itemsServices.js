export function getProductos () {
    return fetch("https://jsonfy.com/items")
                .then(res=>res.json())
}

