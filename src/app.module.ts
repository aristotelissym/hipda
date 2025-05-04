import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from './members/entities/members.entity';

@Module({
  imports: [
    MembersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'hipda-msql',
      port: 3306,
      username: 'hipda-user',
      password: 'hipda@1234!',
      database: 'hipda',
      entities: [Members],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
