import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './order.model';
import { OrderService } from './order.service';

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  exports: [SequelizeModule],
  providers: [OrderService],
  controllers: [],
})
export class OrderModule {}
