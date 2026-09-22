import { TimeAgoPipe } from './time-ago-pipe';

describe('TimeAgoPipe', () => {
  const pipe = new TimeAgoPipe();
  const now = new Date('2026-09-22T12:00:00');
  const ago = (ms: number) => new Date(now.getTime() - ms);

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format relative time in russian', () => {
    expect(pipe.transform(ago(10_000), now)).toBe('только что');
    expect(pipe.transform(ago(5 * 60_000), now)).toBe('5 минут назад');
    expect(pipe.transform(ago(1 * 60_000), now)).toBe('1 минуту назад');
    expect(pipe.transform(ago(3 * 3_600_000), now)).toBe('3 часа назад');
    expect(pipe.transform(ago(2 * 86_400_000), now)).toBe('2 дня назад');
  });

  it('should return empty string for empty value', () => {
    expect(pipe.transform(null)).toBe('');
  });
});
