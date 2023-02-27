import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((resolve) => json(resolve))
      .then((response) => JSON.parse(response));
  }
}
