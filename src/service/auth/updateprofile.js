import fetchData from "../../fetchData";

export default async ({ email,student_id, mobile }) => {
  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      email,
      student_id,
      mobile
    }
  };
  const url = "/auth/updateprofile";
  const response = await fetchData(url, fetchOptions);
  return response;
};
