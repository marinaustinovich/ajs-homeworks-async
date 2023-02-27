export function json(data, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error('Test error'));
      } else {
        resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      }
    }, 500);
  });
}

export function read(shouldReject = false) {
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }

        json(buffer, shouldReject).then(() => {
          resolve(buffer);
        }).catch((err) => {
          reject(err);
        });
      })(data);
    }, 1000);
  });
}
