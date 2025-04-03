document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:8082/getEmp";
    const tableBody = document.getElementById("tableBody");

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data || !Array.isArray(data)) {
                throw new Error("Invalid data format received from API");
            }

            data.forEach(employees => {
                const row = document.createElement("tr");
                row.innerHTML = `
                <th>${employees.name}</th>
                <th>${employees.age}</th>
                <th>${employees.salary}</th>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error occurred while calling API:", error);
        });
});
