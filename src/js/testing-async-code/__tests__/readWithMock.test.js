import { read } from '../readWithMock';

describe('read function', () => {
  it('should resolve with the expected buffer', async () => {
    const mockData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const buffer = new ArrayBuffer(mockData.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < mockData.length; i += 1) {
      bufferView[i] = mockData.charCodeAt(i);
    }

    const result = await read();

    expect(result).toEqual(buffer);
  });

  it('should reject on error', async () => {
    const errorMessage = 'Test error';

    await expect(read(true))
      .rejects
      .toThrow(errorMessage);
  });
});
