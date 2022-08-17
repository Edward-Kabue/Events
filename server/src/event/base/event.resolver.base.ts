/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateEventArgs } from "./CreateEventArgs";
import { UpdateEventArgs } from "./UpdateEventArgs";
import { DeleteEventArgs } from "./DeleteEventArgs";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventFindUniqueArgs } from "./EventFindUniqueArgs";
import { Event } from "./Event";
import { SponsorFindManyArgs } from "../../sponsor/base/SponsorFindManyArgs";
import { Sponsor } from "../../sponsor/base/Sponsor";
import { TicketFindManyArgs } from "../../ticket/base/TicketFindManyArgs";
import { Ticket } from "../../ticket/base/Ticket";
import { EventOrganizer } from "../../eventOrganizer/base/EventOrganizer";
import { EventService } from "../event.service";

@graphql.Resolver(() => Event)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EventResolverBase {
  constructor(
    protected readonly service: EventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async _eventsMeta(
    @graphql.Args() args: EventFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Event])
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async events(@graphql.Args() args: EventFindManyArgs): Promise<Event[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Event, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "own",
  })
  async event(
    @graphql.Args() args: EventFindUniqueArgs
  ): Promise<Event | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "create",
    possession: "any",
  })
  async createEvent(@graphql.Args() args: CreateEventArgs): Promise<Event> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        eventOrganizer: args.data.eventOrganizer
          ? {
              connect: args.data.eventOrganizer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async updateEvent(
    @graphql.Args() args: UpdateEventArgs
  ): Promise<Event | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          eventOrganizer: args.data.eventOrganizer
            ? {
                connect: args.data.eventOrganizer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "delete",
    possession: "any",
  })
  async deleteEvent(
    @graphql.Args() args: DeleteEventArgs
  ): Promise<Event | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Sponsor])
  @nestAccessControl.UseRoles({
    resource: "Sponsor",
    action: "read",
    possession: "any",
  })
  async tagd(
    @graphql.Parent() parent: Event,
    @graphql.Args() args: SponsorFindManyArgs
  ): Promise<Sponsor[]> {
    const results = await this.service.findTagd(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Ticket])
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "read",
    possession: "any",
  })
  async tickets(
    @graphql.Parent() parent: Event,
    @graphql.Args() args: TicketFindManyArgs
  ): Promise<Ticket[]> {
    const results = await this.service.findTickets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => EventOrganizer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EventOrganizer",
    action: "read",
    possession: "any",
  })
  async eventOrganizer(
    @graphql.Parent() parent: Event
  ): Promise<EventOrganizer | null> {
    const result = await this.service.getEventOrganizer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
