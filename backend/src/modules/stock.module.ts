import { Module } from '@nestjs/common';
import { StockService } from '../services/stock.service';
// import { StockGateway } from ;
// import { StockController } from './stock.controller';

@Module({
  providers: [StockService],
  controllers: []
})
export class StockModule {}
