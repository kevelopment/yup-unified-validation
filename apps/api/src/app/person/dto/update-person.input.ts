import { Field, ID, InputType, PartialType } from "@nestjs/graphql";
import { IUpdatePerson, UpdatePersonSchema } from "@types";
import { UseSchema } from "nestjs-yup";
import { CreatePersonInput } from "./create-person.input";

@InputType()
@UseSchema(UpdatePersonSchema)
export class UpdatePersonInput
  extends PartialType(CreatePersonInput)
  implements IUpdatePerson
{
  @Field(() => ID)
  id: string;
}
