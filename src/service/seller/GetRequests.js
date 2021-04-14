import fetchData from "../../fetchData";

export default async ({ book_id }) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const url1 = "/seller/getrequests";
  const url = `${url1}/?book_id=${book_id}`;

  const response = await fetchData(url, fetchOptions);
  return response;
};