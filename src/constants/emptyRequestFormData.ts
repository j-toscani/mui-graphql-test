import { RequestData } from "../interfaces/RequestData";

export const emptyRequestFormData: RequestData = {
  id: crypto.randomUUID(),
  createdAt: new Date(),
  updatedAt: new Date(),
  firstname: "",
  lastname: "",
  email: "",
  street: "",
  city: "",
  streetNr: "",
  phone: "",
  zip: "",
  insuranceNr: "",
};
