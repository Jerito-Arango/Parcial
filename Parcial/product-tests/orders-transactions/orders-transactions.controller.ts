import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersTransactionsService } from './orders-transactions.service';
import { CreateOrdersTransactionDto } from './dto/create-orders-transaction.dto';
import { UpdateOrdersTransactionDto } from './dto/update-orders-transaction.dto';

@Controller('orders-transactions')
export class OrdersTransactionsController {
  constructor(private readonly ordersTransactionsService: OrdersTransactionsService) {}

  @Post()
  create(@Body() createOrdersTransactionDto: CreateOrdersTransactionDto) {
    return this.ordersTransactionsService.create(createOrdersTransactionDto);
  }

  @Get()
  findAll() {
    return this.ordersTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersTransactionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersTransactionDto: UpdateOrdersTransactionDto) {
    return this.ordersTransactionsService.update(id, updateOrdersTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersTransactionsService.remove(id);
  }
}
