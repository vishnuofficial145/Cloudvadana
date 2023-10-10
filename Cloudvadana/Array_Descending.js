function sortDescending(arr) {
    arr.sort(function(a, b) {
      return b - a;
    });
  }
  
  // Get user input as a comma-separated string
  var userInput = prompt("Enter numbers separated by commas:");
  
  // Split the input string into an array
  var inputArray = userInput.split(",").map(function(item) {
    return parseInt(item.trim(), 10);
  });
  
  // Check if the input is valid
  if (!isNaN(inputArray[0])) {
    // Sort the array in descending order
    sortDescending(inputArray);
  
    // Display the sorted array
    console.log("Sorted Array in Descending Order: " + inputArray.join(", "));
  } else {
    console.log("Invalid input. Please enter numbers separated by commas.");
  }