import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class StockService {
  async getStockData(symbol: string): Promise<any> {
    try {
      // Replace this URL with an actual stock market API.
      const response = await axios.get(`https://api.example.com/stocks/${symbol}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching stock data:', error);
      throw new Error('Failed to fetch stock data');
    }
  }
}
