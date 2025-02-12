import { Column, Model, Table, DataType, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table
export class Order extends Model {

  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.STRING)
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  external_id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  subtotal_amount_cents: bigint;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  tax_amount_cents: bigint;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  shipping_cost_cents: bigint;

  @AllowNull(false)
  @Column(DataType.DATE)
  estimated_delivery_date_utc: Date;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  seller_tax_id: bigint;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  buyer_tax_id: bigint;

  @AllowNull(false)
  @Column(DataType.DATE)
  created_at: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  updated_at: Date;
}
