export interface RequestData {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
  firstname: string;
  lastname: string;
  email: string;
  street: string;
  city: string;
  streetNr: string;
  phone: string;
  zip: string;
  insuranceNr: string;
}
