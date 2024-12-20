import { Module } from '@nestjs/common';
import { StockModule } from './modules/stock.module';

@Module({
  imports: [StockModule], // Import the StockModule here
})
export class AppModule {}
