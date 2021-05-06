import fetchData from "../../fetchData";

export default async ({email}) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const url1 = "/buyerHistory/GetbuyerHistory";
  const url = `${url1}/?email=${email}`;

  const response = await fetchData(url, fetchOptions);
  return response;
};
