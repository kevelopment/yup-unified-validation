import { Field, ObjectType } from "@nestjs/graphql";
import { IBase } from "libs/types/src/IBase";
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class Base implements IBase {
    @Field()
    @PrimaryGeneratedColumn()
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}