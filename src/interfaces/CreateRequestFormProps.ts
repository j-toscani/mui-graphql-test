import { RequestData } from "./RequestData";

export type CreateRequestFormProps = {
  request?: RequestData;
  onSubmit: (formData: RequestData) => void;
};
