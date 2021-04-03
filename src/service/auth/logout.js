import fetchData from "../../fetchData";

export default async () => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const url = "/auth/logout";
  const response = await fetchData(url, fetchOptions);
  return response;
};
