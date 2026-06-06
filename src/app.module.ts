import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { JwtStrategy } from './auth/jwt.strategy/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'bugtracker',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    TicketsModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}