import fetchData from "../../fetchData";

export default async ({email}) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      email
    }
  };
  const url = "/auth/getprofile";
  const response = await fetchData(url, fetchOptions);
  return response;
};
