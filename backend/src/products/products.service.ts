
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Get all products
  findAll() {
    return this.productRepository.find();
  }

  // Get one product
  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  // Add a product
  create(data: Partial<Product>) {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  // Update a product
  async update(id: number, data: Partial<Product>) {
    const product = await this.findOne(id);
    Object.assign(product, data);
    return this.productRepository.save(product);
  }

  // Delete a product
  async remove(id: number) {
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }
}
