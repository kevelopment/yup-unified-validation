import { Field, ObjectType } from "@nestjs/graphql";
import { IPerson } from "@types";
import { Column, Entity } from "typeorm";
import { Base } from "../../common/entities/base.entity";

@Entity()
@ObjectType()
export class Person extends Base implements IPerson {
  @Field()
  @Column("text")
  firstName: string;

  @Field()
  @Column("text")
  lastName: string;

  @Field()
  @Column("text")
  email: string;
}
