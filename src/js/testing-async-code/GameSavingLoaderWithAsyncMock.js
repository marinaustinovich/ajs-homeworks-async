import read from './reader';
import json from './parser';

export default class GameSavingLoaderWithAsyncMock {
  static async load() {
    const resolve = await read(); // await  выпоняются последовательно, каждый возвращает промис
    const data = await json(resolve);
    return JSON.parse(data); // промис создается автоматически, так как функция async
  }
}
