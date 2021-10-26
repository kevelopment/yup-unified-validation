import { Field, InputType } from "@nestjs/graphql";
import { IPerson, PersonSchema } from "@types";
import { UseSchema } from "nestjs-yup";

@InputType()
@UseSchema(PersonSchema)
export class CreatePersonInput implements IPerson {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
}
