const solution = require('./brickwall');

describe('solution', () => {
  it('returns a row if the next row can be built', () => {
    const maxWidth1 = 4;
    const row1 = [1, 1, 2];
    const bricks1 = {
      3: 1,
      2: 2,
      1: 4,
    };

    expect(solution(row1, bricks1, maxWidth1)).toEqual(['3', '1']);

    const maxWidth2 = 4;
    const row2 = [2, 1, 1];
    const bricks2 = {
      3: 1,
      2: 2,
      1: 4,
    };

    expect(solution(row2, bricks2, maxWidth2)).toEqual(['1', '3']);

    const maxWidth3 = 3;
    const row3 = [1, 1, 1];
    const bricks3 = {
      3: 1,
      2: 2,
      1: 4,
    };

    expect(solution(row3, bricks3, maxWidth3)).toEqual(['3']);

    bricks3[3] = 0;
    expect(solution(row3, bricks3, maxWidth3)).toEqual(false);

    const maxWidth4 = 10;
    const row4 = [7, 3];
    const bricks4 = {
      1: 4,
      5: 2,
    };

    expect(solution(row4, bricks4, maxWidth4)).toEqual(['5', '5']);
  });

  it('returns false if the next row cannot be built', () => {
    const maxWidth = 4;
    const row = [1, 1, 1, 1];
    const bricks = { 1: 2, 2: 5, 3: 4 };

    expect(solution(row, bricks, maxWidth)).toEqual(false);
    bricks[4] = 1;
    expect(solution(row, bricks, maxWidth)).toEqual(['4']);
  });
});
