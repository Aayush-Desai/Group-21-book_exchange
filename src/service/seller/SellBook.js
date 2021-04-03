import fetchData from "../../fetchData";

export default async ({email, isbn, price, course, book_name, author}) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
        email,
        isbn,
        price,
        course,
        book_name,
        author
    }
  };
  const url = "/seller/sellbook";
  const response = await fetchData(url, fetchOptions);
  return response;
};
