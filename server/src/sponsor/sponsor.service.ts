import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SponsorServiceBase } from "./base/sponsor.service.base";

@Injectable()
export class SponsorService extends SponsorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
