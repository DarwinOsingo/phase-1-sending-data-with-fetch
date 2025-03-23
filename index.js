function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => {
      // Check if the response status is NOT in the 200-299 range (success range)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const idElement = document.createElement("p");
      idElement.textContent = `ID: ${data.id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
  }
  