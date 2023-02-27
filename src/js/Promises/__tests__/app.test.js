import GameSavingLoader from '../GameSavingLoader';

test('should return promise for load()', () => GameSavingLoader.load().then((result) => {
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
}));