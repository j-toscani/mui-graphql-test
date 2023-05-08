import { RequestData } from "../interfaces/RequestData";
import { RequestReducer } from "../interfaces/RequestReducer";

export function getRequests(): Array<RequestData> {
  const requestsRaw = localStorage.getItem("requests") ?? "[]";
  return JSON.parse(requestsRaw);
}

export const requestReducer: RequestReducer = (requests, action) => {
  let newRequests: Array<RequestData> = requests;
  
  switch (action.type) {
    case "update":
      if (action.request) {
        newRequests = updateRequest(action.id, action.request);
      }
      break;
    case "delete":
      newRequests = deleteRequest(action.id);
      break;
    case "create":
      if (action.request) {
        newRequests = createRequest(action.request);
      }
      break;
  }

  localStorage.setItem("requests", JSON.stringify(requests));
  return newRequests;

  function deleteRequest(id: string) {
    return requests.filter((request) => request.id !== id);
  }
  function updateRequest(id: string, request: RequestData) {
    return requests.map((r) => (r.id === id ? request ?? r : r));
  }
  function createRequest(request: RequestData) {
    return [...requests, request];
  }
};
