import read from '../Promises/reader';
import json from '../Promises/parser';

export default class GameSavingLoaderWithAsync {
  static async load() {
    const resolve = await read(); // await  выпоняются последовательно, каждый возвращает промис
    const data = await json(resolve);
    return JSON.parse(data); // промис создается автоматически, так как функция async
  }
}
