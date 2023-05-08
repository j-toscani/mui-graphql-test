import { Reducer } from "react";
import { RequestData } from "./RequestData";

export type RequestActions = {
  type: "update" | "delete" | "create";
  id: string;
  request?: RequestData;
};

export type RequestReducer = Reducer<Array<RequestData>, RequestActions>;
