import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from './entities/members.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Members])],
  exports: [TypeOrmModule],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
