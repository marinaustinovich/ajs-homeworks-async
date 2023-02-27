import read from '../reader';
import GameSavingLoaderWithAsyncMock from '../GameSavingLoaderWithAsyncMock';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return error for load()', async () => {
  read.mockReturnValue({});
  await expect(GameSavingLoaderWithAsyncMock.load()).rejects.toThrow();
});
