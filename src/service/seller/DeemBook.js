import fetchData from "../../fetchData";

export default async ({buyer_email, book_id, isbn, price, course, seller_email}) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
        buyer_email,
        book_id,
        isbn,
        price,
        course,
        seller_email
    }
  };
  const url = "/seller/deembook";
  const response = await fetchData(url, fetchOptions);
  return response;
};
