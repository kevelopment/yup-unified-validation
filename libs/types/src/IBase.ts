import * as yup from 'yup';

export const UpdateBaseSchema = yup.object({
    id: yup.string().required(),
});

export const BaseSchema = UpdateBaseSchema.concat(yup.object({
    createdAt: yup.date(),
    deletedAt: yup.date(),
}));

export interface IUpdateBase {
    id: string;
}

export interface IBase extends IUpdateBase {
    createdAt: Date;
    deletedAt: Date;
}