import { Dispatch, createContext } from "react";
import { RequestData } from "../interfaces/RequestData";
import { RequestActions } from "../interfaces/RequestReducer";

export const RequestContext = createContext<Array<RequestData>>([]);
export const RequestActionsContext = createContext<Dispatch<RequestActions> | null>(null);