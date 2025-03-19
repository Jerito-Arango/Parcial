import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Entity('orders_transactions') 
export class OrdersTransaction {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  client_id: string;

  @Column('numeric', { default: 0 })
  total_amount: number;


  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.PENDING
  })
  status: TransactionStatus;
}