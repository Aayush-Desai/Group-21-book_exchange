import HTTPError from "./HTTPError.js";

const requiredBody = ["GET", "POST", "PUT", "DELETE"];

export default async (url, { method, headers, body, ...otherOptions }) => {
  const fetchOptions = {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body,
    ...otherOptions
  };
  if (requiredBody.includes(method)) {
    fetchOptions.body = JSON.stringify(body);
  }
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new HTTPError(response);
  }
  const json = await response.json();
  return json;
};
