
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Witcher. Last wish',
      author: 'Sapkowski Andrzej',
      price: 32,
      coverImage: 'https://ir.ozone.ru/s3/multimedia-5/wc1000/6064270157.jpg'},
    {
      id: 2,
      title: "Witcher. Storm season.",
      author: 'Sapkowski Andrzej',
      price: 45,
      coverImage: 'https://ir.ozone.ru/s3/multimedia-k/wc1000/6080759720.jpg'},
    {
      id: 3,
      title: 'Assassin\'s Creed. Secret crusade',
      author: 'Bowden Oliver',
      price: 48,
      coverImage: 'https://ir.ozone.ru/multimedia/wc1000/1015932727.jpg'},
    {
      id: 4,
      title: "Assassin's Creed." ,
      author: 'Golden Christie',
      price: 36,
      coverImage: 'https://ir.ozone.ru/s3/multimedia-y/wc1000/6251683522.jpg'},
    {
      id: 5,
      title: 'Assassin\'s Creed. Unity',
      author: 'Bowden Oliver',
      price: 15,
      coverImage: 'https://ir.ozone.ru/s3/multimedia-7/wc1000/6023841043.jpg'},
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.75) {
        if (false) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}