export const registerUser = async (userData, navigate) => {
  try {
    const response = await fetch(
      `https://curly-space-halibut-wrrp4gvpqxq5c9v59-3001.app.github.dev/api/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg);
    }
    navigate("/login");
  } catch (error) {
    console.error(error);
  }
};

export const loginSync = async (user, navigate) => {
  try {
    const response = await fetch(
      `https://curly-space-halibut-wrrp4gvpqxq5c9v59-3001.app.github.dev/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    sessionStorage.setItem("token", data.token);
    navigate("/");
    return data;
  } catch (error) {
    console.error(error);
  }
};
