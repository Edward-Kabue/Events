/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SponsorWhereInput } from "./SponsorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SponsorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SponsorWhereInput,
  })
  @ValidateNested()
  @Type(() => SponsorWhereInput)
  @IsOptional()
  @Field(() => SponsorWhereInput, {
    nullable: true,
  })
  every?: SponsorWhereInput;

  @ApiProperty({
    required: false,
    type: () => SponsorWhereInput,
  })
  @ValidateNested()
  @Type(() => SponsorWhereInput)
  @IsOptional()
  @Field(() => SponsorWhereInput, {
    nullable: true,
  })
  some?: SponsorWhereInput;

  @ApiProperty({
    required: false,
    type: () => SponsorWhereInput,
  })
  @ValidateNested()
  @Type(() => SponsorWhereInput)
  @IsOptional()
  @Field(() => SponsorWhereInput, {
    nullable: true,
  })
  none?: SponsorWhereInput;
}
export { SponsorListRelationFilter };
