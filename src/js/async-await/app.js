import GameSavingLoaderWithAsync from './GameSavingLoaderWithAsync';

export default function showGameSavingLoaderWithAsync() {
  (async () => {
    try {
      const result = await GameSavingLoaderWithAsync.load();
      // асихронная функция всегда возвращает промис, но await позволяет вытащить результат
      console.log('async - result load(): user level ', result.userInfo.level);
    } catch (error) {
      console.error(error);
    }
  })();
}
showGameSavingLoaderWithAsync();
