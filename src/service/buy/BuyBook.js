import fetchData from "../../fetchData";

export default async ({ email, book_id }) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      email,
      book_id
    }
  };
  const url = "/buy/BuyBook";
  const response = await fetchData(url, fetchOptions);
  return response;
};