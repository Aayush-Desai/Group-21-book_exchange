import fetchData from "../../fetchData";

export default async () => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const url = "/buy/GetAvailableBooks";
  const response = await fetchData(url, fetchOptions);
  return response;
};