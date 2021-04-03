import fetchData from "../../fetchData";

export default async ({ email, password }) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      email,
      password
    }
  };
  const url = "/auth/signin";
  const response = await fetchData(url, fetchOptions);
  return response;
};
