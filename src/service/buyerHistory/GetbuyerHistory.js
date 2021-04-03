import fetchData from "../../fetchData";

export default async ({email,email}) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    body: {
      email,
      email
    }
  };
  const url = "/buyerHistory/GetbuyerHistory";
  const response = await fetchData(url, fetchOptions);
  return response;
};
