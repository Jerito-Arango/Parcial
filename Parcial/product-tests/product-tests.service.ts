import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductTestDto } from './dto/create-product-test.dto';
import { UpdateProductTestDto } from './dto/update-product-test.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductTest } from './entities/product-test.entity';
@Injectable()
export class ProductTestsService {
  constructor(
    @InjectRepository(ProductTest)
private readonly productTestsRepository: Repository<ProductTest>,

  ) {}
  
  async create(createProductTestDto: CreateProductTestDto) {
    const newProductTest = this.productTestsRepository.create(createProductTestDto);
    await this.productTestsRepository.save(newProductTest);
    return newProductTest;
}


  async findAll() {
       const producttests=await this.productTestsRepository.find({});
       return producttests;
  }

  async findOne(id: string) {
    const producttest = await this.productTestsRepository.findOneBy({ id });
    if (!producttest) {
        throw new NotFoundException("Not found");
    }
    return producttest;
}


  async update(id: string, updateProductTestDto: UpdateProductTestDto) {
   const producttest = await this.productTestsRepository.preload({id:id,...updateProductTestDto});
   if(!producttest){
    throw new NotFoundException("Dictator #${id} not found")
   }
   await this.productTestsRepository.save(producttest);
   return producttest;
 }

  remove(id: string) {
    const producttest = this.findOne(id);
    this.productTestsRepository.delete({id:id})
    return producttest;
 }

}
