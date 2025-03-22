const form = document.getElementById("data");
const dishInput = document.getElementById("dish");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const apiUrl =
  "https://crudcrud.com/api/0193d394fc3b4d618a9357d8dd1a597e/restaurantApp";
function fetchData() {
  axios
    .get(apiUrl)
    .then((response) => {
      const orders = response.data;
      tab1.innerHTML = "";
      tab2.innerHTML = "";
      tab3.innerHTML = "";
      orders.forEach((order) => {
        const li = document.createElement("li");
        li.textContent = `Description: ${order.dish} , Expense amount: ${order.amount} , Category: ${order.table}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteOrder(order._id);

        li.appendChild(deleteBtn);

        if (order.table === "table1") {
          tab1.appendChild(li);
        } else if (order.table === "table2") {
          tab2.appendChild(li);
        } else if (order.table === "table3") {
          tab3.appendChild(li);
        }
      });
    })
    .catch((error)=>{
      console.log(error);
    })
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const orderData = {
    dish: dishInput.value,
    amount: amountInput.value,
    table: categorySelect.value,
  };

  axios
    .post(apiUrl, orderData)
    .then(() => {
      fetchData();
      dishInput.value = "";
      amountInput.value = "";
    })
    .catch((error) => {
      console.error("Error adding data", error);
    });
});
function deleteOrder(orderId) {
  axios
    .delete(`${apiUrl}/${orderId}`)
    .then(() => {
      fetchData();
    })
    .catch((error) => {
      console.error("Error deleting order", error);
    });
}
window.onload = function(){
  fetchData();
}

 


