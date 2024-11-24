// Example login function
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("/login", { username, password });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userRole", response.data.role); // Store user role
    navigate("/dashboard"); // Redirect after login
  } catch (error) {
    setError("Invalid username or password");
  }
};
