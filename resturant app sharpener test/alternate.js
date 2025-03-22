/* window.onload is an event handler
 that executes a function when the entire webpage has finished loading. 
 It ensures that
 all DOM elements are fully loaded and accessible before the function 
 associated with window.onload is executed. */
window.onload = function () {
  fetchData();
};
//this is the alternate of window.onload
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

//--------------normal api to many---------------

function fetchData() {
  axios
    .get(apiUrl)
    .then((response) => response.data)
    .then((orders) => {
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
    .catch((err) => {
      console.log(err);
    });
}

//   alternate of normal api call to async and await
async function fetchData() {
  try {
    const response = await axios.get(API_URL);
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
  } catch (error) {
    console.log(error);
  }
}

// --------------using fetch ------------

async function fetchData() {
  try {
    const data = await fetch(API_URL);
    const response = await data.json();
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
  } catch (error) {
    console.log(error);
  }
}
// ------- e.preventDefault(); ---------//
e.preventDefault();
/*By default, when a form is submitted, the page reloads.
When you want to prevent page reloads, unwanted 
navigation, or default browser behaviors and 
When you need full control over an event.*/

//----------- for post -------//

//     1.initial  axios with .then

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

//           2. axios with async await

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const orderData = {
    dish: dishInput.value,
    amount: amountInput.value,
    table: categorySelect.value,
  };

  try {
    await axios.post(apiUrl, orderData);
    fetchData();
    dishInput.value = "";
    amountInput.value = "";
  } catch (error) {
    console.error("Error adding data", error);
  }
});

//           3. Using fetch with .then()

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const orderData = {
    dish: dishInput.value,
    amount: amountInput.value,
    table: categorySelect.value,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to add order");
      return response.json();
    })
    .then(() => {
      fetchData();
      dishInput.value = "";
      amountInput.value = "";
    })
    .catch((error) => {
      console.error("Error adding data", error);
    });
});

//           4.Using fetch with async/await

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const orderData = {
    dish: dishInput.value,
    amount: amountInput.value,
    table: categorySelect.value,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) throw new Error("Failed to add order");

    await fetchData();
    dishInput.value = "";
    amountInput.value = "";
  } catch (error) {
    console.error("Error adding data", error);
  }
});

// ----- for delete----------- //

//              1.axios with async await

async function deleteData(orderId) {
  try {
    await axios.delete(`${apiUrl}/${orderId}`);
    await fetchData();
  } catch (error) {
    console.log(error);
  }
}

//              2.axios with .then()

function deleteData(orderId) {
  axios
    .delete(`${apiUrl}/${orderId}`)
    .then(() => {
      fetchData();
    })
    .catch((err) => {
      console.log(err);
    });
}

//              3.Using async/await with fetch()

async function deleteData(orderId) {
  try {
    const response = await fetch(`${apiUrl}/${orderId}`, { method: "DELETE" });
    if (!response.ok) throw new Error("somthing went wrong");
    await fetchData();
  } catch (error) {
    console.error(error);
  }
}


//              4.Using  fetch() with .then()

function deleteData(orderId){
  fetch(`${apiUrl}/${orderId}`,
    {method:"DELETE"}
  )
  .then((response)=>{
    if(!response.ok){
      throw new Error("delete failed")
    }
    return response.json();
  })
  .then(()=>{
    fetchData();
  })
  .catch((error)=>{
    console.log(error);
  })
}
//----------------------------------------------------------
// ------------------------------------------------------------
// ---------------------------------------------------------------
// -----------------------------------------------------------------
// -------------------------------------------------------------------
// ---------------------------------------------------------------------//

// similar code of the main project using fetch() api


const form = document.getElementById("data");
const dishInput = document.getElementById("dish");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

const apiUrl = "https://crudcrud.com/api/5e4be2bc7c1a4cde97236ad5f4e18c7c/restaurantApp";

// Function to fetch and display data from the database
function fetchData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(orders => {
      // Clear the current lists
      tab1.innerHTML = '';
      tab2.innerHTML = '';
      tab3.innerHTML = '';

      // Render the orders based on the table selection
      orders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `Description: ${order.dish} , Expense amount: ${order.amount} , Category: ${order.table}`;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteOrder(order._id);  // Use _id to delete the order

        li.appendChild(deleteBtn);

        // Append the order to the corresponding table list
        if (order.table === "table1") {
          tab1.appendChild(li);
        } else if (order.table === "table2") {
          tab2.appendChild(li);
        } else if (order.table === "table3") {
          tab3.appendChild(li);
        }
      });
    })
    .catch(error => {
      console.error("Error fetching data", error);
    });
}

// Function to add an order to the database
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const orderData = {
    dish: dishInput.value,
    amount: amountInput.value,
    table: categorySelect.value
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error adding data");
      }
      return response.json();
    })
    .then(() => {
      fetchData(); // Update the UI
      // Clear input fields
      dishInput.value = "";
      amountInput.value = "";
    })
    .catch(error => {
      console.error("Error adding data", error);
    });
});

// Function to delete an order from the database
function deleteOrder(orderId) {
  fetch(`${apiUrl}/${orderId}`, { method: 'DELETE' })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error deleting order");
      }
      fetchData(); // Fetch and update UI after deletion
    })
    .catch(error => {
      console.error("Error deleting order", error);
    });
}

// Initial fetch to load data when page loads
window.onload = function () {
  fetchData();
};