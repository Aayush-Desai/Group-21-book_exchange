import fetchData from "../../fetchData";

export default async ({ book_id , email }) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      book_id,
      email
    }
  };
  const url = "/wishlist/removeFromwishlist";
  const response = await fetchData(url, fetchOptions);
  return response;
};
