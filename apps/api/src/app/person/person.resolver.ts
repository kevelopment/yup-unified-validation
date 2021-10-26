import { UsePipes } from "@nestjs/common";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { YupValidationPipe } from "nestjs-yup";
import { CreatePersonInput } from "./dto/create-person.input";
import { UpdatePersonInput } from "./dto/update-person.input";
import { Person } from "./entities/person.entity";
import { PersonService } from "./person.service";

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(() => Person)
  createPerson(
    @Args("createPersonInput") createPersonInput: CreatePersonInput
  ) {
    return this.personService.create(createPersonInput);
  }

  @Query(() => [Person], { name: "person" })
  findAll() {
    return this.personService.findAll();
  }

  // add the validation pipe explicitly to this resolver (if not using globally)
  @UsePipes(new YupValidationPipe())
  @Query(() => Person, { name: "person" })
  findOne(@Args("id", { type: () => ID }) id: string) {
    return this.personService.findOne(id);
  }

  @Mutation(() => Person)
  updatePerson(
    @Args("updatePersonInput") updatePersonInput: UpdatePersonInput
  ) {
    return this.personService.update(updatePersonInput.id, updatePersonInput);
  }

  @Mutation(() => Person)
  removePerson(@Args("id", { type: () => ID }) id: string) {
    return this.personService.remove(id);
  }
}
