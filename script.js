const locations = [
    { name: "Boy Washroom", coordinates: "23.2011805, 79.9127222" },
    { name: "Account Office", coordinates: "23.2013694, 79.9126853" },
    { name: "B.Tech Admission Room G41", coordinates: "23.2015315, 79.9124737" },
    { name: "SRIT Garden", coordinates: "23.2015306, 79.9119913" },
    { name: "SRIT Canteen", coordinates: "23.2019189, 79.9120909" },
    { name: "SRIT Main Gate", coordinates: "23.2015839, 79.9123044" },
    { name: "SRIT MCA Library", coordinates: "23.2016070, 79.9124573" },
    { name: "SRIT Principal Room", coordinates: "23.2018064, 79.9124758" },
    { name: "SRIT Group Director", coordinates: "23.2015207, 79.9125606" },
    { name: "SRIT Admission Room", coordinates: "23.2014400, 79.9125478" },
    { name: "SRIT Account Office", coordinates: "23.2015654, 79.9131745" },
    { name: "SRIT Boys Washroom and Staff Washroom", coordinates: "23.2010862, 79.9126058" },
    { name: "SRIT Library", coordinates: "23.2019016, 79.9124925" },
    { name: "SRIT Girls Washroom", coordinates: "23.2021232, 79.9124218" },
    { name: "SRIT Boys Washroom", coordinates: "23.2021876, 79.9130819" },
    { name: "SRIT Girls Washroom", coordinates: "23.2012231, 79.9132633" },
    { name: "SRIT Training Placement Officer Room", coordinates: "23.2019133, 79.9131198" },
    { name: "SRIT EC Seminar Hall", coordinates: "23.2020067, 79.9124566" },
    { name: "SRIT Chemistry Lab", coordinates: "23.2020218, 79.9130803" },
    { name: "SRIT Department of Mechanical Engineering", coordinates: "23.2022064, 79.9130668" },
    { name: "SRIT Auditorium", coordinates: "23.2017842, 79.9132241" },
    { name: "SRIST Main Gate", coordinates: "23.2020274, 79.9135473" },
    { name: "SRIST Library", coordinates: "23.2021648, 79.9137766" },
    { name: "SRIST Girls Washroom", coordinates: "23.2023099, 79.9136569" },
    { name: "SRIST Boys Washroom", coordinates: "23.2024129, 79.9134447" },
    { name: "SRIST BEEE Lab", coordinates: "23.2024723, 79.9135480" },
    { name: "SRIST Account Office", coordinates: "23.2026468, 79.9133874" },
    { name: "SRIST Principal Room", coordinates: "23.2026437, 79.9133331" },
    { name: "SRIST Chemistry Lab", coordinates: "23.2025851, 79.9132519" },
    { name: "SRIST Khan Sir HOD Room", coordinates: "23.2025118, 79.9132627" },
    { name: "SRIST Workshop", coordinates: "23.2022887, 79.9133538" },
    { name: "SRIST Prateek Sir HOD Room", coordinates: "23.2020529, 79.9136315" },
    { name: "SRIST English Lab", coordinates: "23.2022649, 79.9137267" },
    { name: "SRIST 2nd Gate", coordinates: "23.2027173, 79.9134585"   },
    { name: "SRIST Medical Room", coordinates: "23.2020668, 79.9136864" },
    { name: "SRIST Parking", coordinates: "23.2018782, 79.9135228" },
    { name: "SRIST 2nd Parking", coordinates: "23.2028267, 79.9133237" },
    { name: "1st Gate", coordinates: "23.2011636, 79.9104896" ,  },
    { name: "2nd Gate Pharmacy", coordinates: "23.1999315, 79.9131537" },
    { name: "3rd Gate Green City", coordinates: "23.2040458, 79.9138014" },
    { name: "SRIT Ground", coordinates: "23.2005392, 79.9116684" },
    { name: "SRIST Civil Lab", coordinates: "23.2033379, 79.9133978" },
    { name: "SRIST BME Lab", coordinates: "23.2031842, 79.9134142" },
    { name: "SRIST Washroom Civil Building", coordinates: "23.2033503, 79.9132918" },
    { name: "SRIST Gate Civil Building", coordinates: "23.2030714, 79.9134011" },
    { name: "SRIT 2nd Entrance or Exit Gate", coordinates: "23.2010089, 79.9126340" }
];



// document.addEventListener("DOMContentLoaded", () => {
//     const locationsContainer = document.getElementById("locations");

//     locations.forEach((location) => {
//         const locationDiv = document.createElement("div");
//         locationDiv.classList.add("location");

//         locationDiv.innerHTML = `
//             <h3>${location.name}</h3>
//             <p><strong>Coordinates:</strong> ${location.coordinates}</p>
//             <button onclick="copyToClipboard('${location.coordinates}')">Copy Coordinates</button>
//             <p>
//                 <a href="https://www.google.com/maps?q=${location.coordinates}" target="_blank">
//                     Navigate on Google Maps
//                 </a>
//             </p>
//         `;

//         locationsContainer.appendChild(locationDiv);
//     });
// });

// function copyToClipboard(text) {
//     navigator.clipboard.writeText(text).then(() => {
//         alert("Coordinates copied to clipboard!");
//     });
// }

// const locations = [
//     { name: "Boy Washroom", coordinates: "23.2011805, 79.9127222" },
//     { name: "Account Office", coordinates: "23.2013694, 79.9126853" },
//     { name: "B.Tech Admission Room G41", coordinates: "23.2015315, 79.9124737" },
//     { name: "SRIT Garden", coordinates: "23.2015306, 79.9119913" },
//     { name: "SRIT Canteen", coordinates: "23.2019189, 79.9120909" },
//     { name: "SRIT Main Gate", coordinates: "23.2015839, 79.9123044" },
//     { name: "SRIT Library", coordinates: "23.2019016, 79.9124925" },
//     { name: "SRIST Parking", coordinates: "23.2018782, 79.9135228" },
//     // Add more locations
// ];

// Display matching locations in recommendations
function displayRecommendations(query) {
    const recommendations = document.getElementById("recommendations");
    recommendations.innerHTML = ""; // Clear previous results

    if (!query) {
        recommendations.style.display = "none";
        return;
    }

    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredLocations.length === 0) {
        recommendations.style.display = "none";
        return;
    }

    recommendations.style.display = "block";

    filteredLocations.forEach(location => {
        const listItem = document.createElement("li");
        listItem.textContent = location.name;
        listItem.addEventListener("click", () => {
            document.getElementById("searchBox").value = location.name;
            displayLocations([location]); // Display selected location
            recommendations.style.display = "none"; // Hide recommendations
        });
        recommendations.appendChild(listItem);
    });
}

// Display locations in results
function displayLocations(locationsToShow) {
    const container = document.getElementById("locationsContainer");
    container.innerHTML = ""; // Clear previous results

    if (locationsToShow.length === 0) {
        container.innerHTML = "<p>No locations found.</p>";
        return;
    }

    locationsToShow.forEach(location => {
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("location");

        locationDiv.innerHTML = `
            <div class="location-name">${location.name}</div>
            <div class="location-actions">
                <button onclick="copyToClipboard('${location.coordinates}')">Copy Coordinates</button>
                <a href="https://www.google.com/maps?q=${location.coordinates}" target="_blank">Google Maps</a>
            </div>
        `;

        container.appendChild(locationDiv);
    });
}

// Copy coordinates to clipboard
function copyToClipboard(coordinates) {
    navigator.clipboard.writeText(coordinates)
        .then(() => alert(`Copied: ${coordinates}`))
        .catch(err => console.error("Error copying text: ", err));
}

// Event listener for search button
document.getElementById("searchButton").addEventListener("click", function () {
    const searchQuery = document.getElementById("searchBox").value.toLowerCase();
    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(searchQuery)
    );
    displayLocations(filteredLocations);
});

// Event listener for real-time recommendations
document.getElementById("searchBox").addEventListener("input", function () {
    displayRecommendations(this.value.toLowerCase());
});

// Initial display
displayLocations(locations);























