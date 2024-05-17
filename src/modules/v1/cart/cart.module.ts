import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartEntity } from './entities/cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { CartProductEntity } from './entities/cart-products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, CartProductEntity]), ProductModule, UserModule],
  controllers: [ CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
