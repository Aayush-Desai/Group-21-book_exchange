import fetchData from "../../fetchData";

export default async ({bookName}) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(bookName);
  const url1 = "/buy/searchbook";
  const url = `${url1}/?bookname=${bookName}`;
  const response = await fetchData(url, fetchOptions);
  return response;
};