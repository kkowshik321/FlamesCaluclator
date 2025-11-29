function flamesCaluclator() {
    let name1 = document.getElementById("name1").value.trim().toLowerCase();
    let name2 = document.getElementById("name2").value.trim().toLowerCase();

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerHTML = "Please enter both names!";
        return;
    }

    // Remove spaces
    name1 = name1.replace(/\s+/g, "");
    name2 = name2.replace(/\s+/g, "");

    // Convert to arrays
    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // Remove common letters
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr1.splice(i, 1);
            arr2.splice(index, 1);
            i--;
        }
    }

    // Remaining letters count
    let count = arr1.length + arr2.length;

    if (count === 0) {
        document.getElementById("result").innerHTML = "Both names match completely!";
        return;
    }

    // FLAMES logic
    let flames = ["F", "L", "A", "M", "E", "S"];

    let index = 0;
    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    let resultText = "";

    switch (flames[0]) {
        case "F": resultText = "Friends"; break;
        case "L": resultText = "Lovers"; break;
        case "A": resultText = "Affection"; break;
        case "M": resultText = "Marriage"; break;
        case "E": resultText = "Enemies"; break;
        case "S": resultText = "Siblings"; break;
    }

    document.getElementById("result").innerHTML = 
        "<h3>Your FLAMES Result:</h3><h2>"  + resultText + "</h2>";
}
