import GameSavingLoader from './GameSavingLoader';

export default function showGameSavingLoader() {
  return GameSavingLoader.load()
    .then((response) => {
      console.log('promis - result load(): user name ', response.userInfo.name);
    }, (error) => {
      console.error(error);
    });
}
showGameSavingLoader();
