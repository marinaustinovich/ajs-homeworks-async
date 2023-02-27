import GameSavingLoaderWithAsync from '../GameSavingLoaderWithAsync';
// import showGameSavingLoaderWithAsync from '../app'

test('should return promise for load()', async () => {
  const result = await GameSavingLoaderWithAsync.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo:
        {
          id: 1,
          name: 'Hitman',
          level: 10,
          points: 2000,
        },
  };
  expect(result).toEqual(expected);
});
//
// Как проверить ветку cath?
// test('should fails with an error', async ()=>{
//   await expect(showGameSavingLoaderWithAsync()).rejects.toMatch('error');
// });
