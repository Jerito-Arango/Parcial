import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateOrdersTransactionDto } from './dto/create-orders-transaction.dto';
import { UpdateOrdersTransactionDto } from './dto/update-orders-transaction.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersTransaction } from './entities/orders-transaction.entity'; 

@Injectable()
export class OrdersTransactionsService {
  constructor(
    @InjectRepository(OrdersTransaction)
    private readonly OrdersTransactionsRepository: Repository<OrdersTransaction>,
  ) {}
  async create(createOrdersTransactionDto: CreateOrdersTransactionDto) {
    const newUser = this.OrdersTransactionsRepository.create(createOrdersTransactionDto);
    await this.OrdersTransactionsRepository.save(newUser);
    return newUser;
  }

  findAll() {
    const orderstransaction = this.OrdersTransactionsRepository.find({});
    return orderstransaction;

  }

  findOne(id: string) {
    const orderstransaction = this.OrdersTransactionsRepository.findOneBy({id:id});
    if(!orderstransaction){
      throw new NotFoundException ("Not found");
    }
    return orderstransaction;

  }

  async update(id: string, updateOrdersTransactionDto: UpdateOrdersTransactionDto) {
    const user = await this.OrdersTransactionsRepository.preload({id:id,...updateOrdersTransactionDto});
    if(!user){
      throw new NotFoundException("User #${id} not found");
    }
    await this.OrdersTransactionsRepository.save(user);
    return user;
  }

  remove(id: string) {
    const user = this.findOne(id);
    this.OrdersTransactionsRepository.delete({id:id})
    return user;

  }
}
