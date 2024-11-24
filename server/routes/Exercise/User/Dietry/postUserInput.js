function validateUserInput(input) {
  const errors = {};

  // Validate name
  if (!input.name || input.name.trim() === "") {
    errors.name = "Name is required.";
  } else if (input.name.length > 50) {
    errors.name = "Name should not exceed 50 characters.";
  }

  // Validate email
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!input.email || input.email.trim() === "") {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(input.email)) {
    errors.email = "Invalid email format.";
  }

  // Validate age (if provided)
  if (
    input.age &&
    (!Number.isInteger(input.age) || input.age < 18 || input.age > 99)
  ) {
    errors.age = "Age must be a number between 18 and 99.";
  }

  return errors;
}
app.post("/process", (req, res) => {
  const userInput = req.body;

  // Validate user input
  const errors = validateUserInput(userInput);

  if (Object.keys(errors).length > 0) {
    // There are validation errors
    res.status(400).json({ errors });
  } else {
    // User input is valid, process it further
    // ...

    // Send a success response
    res.json({ message: "User input is valid." });
  }
});