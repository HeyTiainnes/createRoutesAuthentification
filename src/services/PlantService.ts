import Book from '../models/interfaces/Book';
import AppDataSource from '../data-source';
class BookService {
  async getAll(): Promise<Book[]> {
    console.log('BookService');
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    return AppDataSource.query('SELECT * FROM book;');
  }
}

export default BookService;
