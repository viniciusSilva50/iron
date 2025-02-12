import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order,
  ) {}

  async findAll(): Promise<Order[]> {
    const allOrders = await this.orderModel.findAll();
    return allOrders;
  }
}
