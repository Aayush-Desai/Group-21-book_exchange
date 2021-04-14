import fetchData from "../../fetchData";

export default async () => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const url = "/auth/getprofile";
  const response = await fetchData(url, fetchOptions);
  return response;
};
