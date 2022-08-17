import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SponsorResolverBase } from "./base/sponsor.resolver.base";
import { Sponsor } from "./base/Sponsor";
import { SponsorService } from "./sponsor.service";

@graphql.Resolver(() => Sponsor)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SponsorResolver extends SponsorResolverBase {
  constructor(
    protected readonly service: SponsorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
