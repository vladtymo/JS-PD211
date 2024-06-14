// ----------- get form and elements
const form = document.forms.product;

const nameIn = form.elements.model;
const priceIn = form.elements.price;
const discountIn = form.elements.discount;
const inStockCb = form.elements.inStock;

const tBody = document.querySelector('table tbody');
const clearAllBtn = document.querySelector('#clearAllBtn');

// ----------- create new product
form.onsubmit = (event) => {
    event.preventDefault();

    tBody.innerHTML += `<tr>
                            <th scope="row">1</th>
                            <td>
                                ${nameIn.value}
                                ${discountIn.value > 0
            ? '<span class="badge text-bg-primary">SALE</span>'
            : ''}
                            </td>
                            <td>${priceIn.value}$</td>
                            <td>${discountIn.value}%</td>
                            <td>
                                ${inStockCb.checked
            ? '<span class="badge text-bg-success">In Stock</span>'
            : '<span class="badge text-bg-secondary">Out of Stock</span>'}
                            </td>
                        </tr>`;
}

clearAllBtn.onclick = () => {
    tBody.innerHTML = "";
}