import fetchData from "../../fetchData";

export default async ({ email, mobile }) => {
  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      email,
      mobile
    }
  };
  const url = "/auth/updateprofile";
  const response = await fetchData(url, fetchOptions);
  return response;
};
