import GameSavingLoaderWithAsyncMock from './GameSavingLoaderWithAsyncMock';

export default function showGameSavingLoaderWithAsyncMock() {
  (async () => {
    try {
      const result = await GameSavingLoaderWithAsyncMock.load();
      // асихронная функция всегда возвращает промис, но await позволяет вытащить результат
      console.log('async/Mock - result load(): user created ', result.created);
    } catch (error) {
      console.error(error);
    }
  })();
}
showGameSavingLoaderWithAsyncMock();
