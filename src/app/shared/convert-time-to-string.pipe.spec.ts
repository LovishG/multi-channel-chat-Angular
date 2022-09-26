import { ConvertTimeToStringPipe } from './convert-time-to-string.pipe';

describe('ConvertTimeToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertTimeToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
