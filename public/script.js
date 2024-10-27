function generateItems() {
    const quantity = document.getElementById("quantity").value;
    const container = document.getElementById("itemContainer");

    container.innerHTML = "";

    for (let i = 1; i <= quantity; i++) {
        const itemCard = document.createElement("div");
        itemCard.className = "item-card";
        itemCard.innerHTML = `<span>${i}</span> Item ${i}`;
        container.appendChild(itemCard);
    }
}
