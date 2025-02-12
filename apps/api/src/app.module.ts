import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        port: 5432,
        host: 'localhost',
        username: 'collect7711?More!',
        password: 'make?Jurassic@3422!',
        database: 'ironstudios',
        logging: console.log,
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
