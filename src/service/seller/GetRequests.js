import fetchData from "../../fetchData";

export default async ({ book_id }) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      book_id
    }
  };
  const url = "/seller/getrequests";
  const response = await fetchData(url, fetchOptions);
  return response;
};