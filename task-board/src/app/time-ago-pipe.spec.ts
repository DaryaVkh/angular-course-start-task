import { TimeAgo } from './time-ago-pipe';

describe('TimeAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeAgo();
    expect(pipe).toBeTruthy();
  });
});
