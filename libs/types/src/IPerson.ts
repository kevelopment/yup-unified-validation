import * as yup from "yup";
import { BaseSchema, IUpdateBase } from "./IBase";

export const PersonSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
});

export const UpdatePersonSchema = BaseSchema.concat(
  yup.object({
    firstName: yup.string().notRequired(),
    lastName: yup.string().notRequired(),
    email: yup.string().email("Invalid email").notRequired(),
  })
);

export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUpdatePerson extends IUpdateBase, Partial<IPerson> {}
