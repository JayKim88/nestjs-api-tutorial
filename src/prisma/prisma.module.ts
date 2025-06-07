import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * @description below makes it globally usable for modules
 */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
