import Index from '../../src/index';

describe('index', () => {
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it('should be this', () => {
    expect.assertions(1);

    expect(index.x).toBe(1);
  });

  it('should also be this', () => {
    expect.assertions(1);

    expect(index.y).toBe(2);
  });
});
