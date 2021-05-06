import fetchData from "../../fetchData";

export default async ({ name, email, password }) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      name,
      email,
      password
    }
  };
  const url = "/auth/signup";
  const response = await fetchData(url, fetchOptions);
  return response;
};
