import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Initial1000000000000 } from './migration';
import { Toy, Human, Dog, Mammal } from './entities';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'db',
      entities: [Toy, Human, Dog, Mammal],
      synchronize: false,
      logging: true,
      migrations: [Initial1000000000000],
      migrationsRun: true,
    }),
    TypeOrmModule.forFeature([Toy, Human, Dog, Mammal]),
  ],
  providers: [AppService],
})
export class AppModule {}
