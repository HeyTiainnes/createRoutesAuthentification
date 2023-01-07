import { Request, Response } from 'express';
import BookService from '../services/BookService';

class BookController {
  private bookService = new BookService();

  async getAll(req: Request, res: Response) {
    console.log('BookController');

    try {
      const books = await this.bookService.getAll();
      res.send({ status: 'OK', data: books });
    } catch (error) {
      res.status(500).send({ status: 'Failed', message: error });
    }
  }
}

export default BookController;
