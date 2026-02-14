const { computeComfortIndex } = require('../comfortIndex');

describe('computeComfortIndex', () => {
    
  test('returns 100 for perfect conditions', () => {
    const tempK = 293.15;
    const humidity = 50;
    const windSpeed = 2;
    expect(computeComfortIndex(tempK, humidity, windSpeed)).toBe(100);
  });

  //test temperature variations
  test('returns lower score for hot temperature', () => {
    const tempK = 313.15;
    const humidity = 50;
    const windSpeed = 2;
    const result = computeComfortIndex(tempK, humidity, windSpeed);
    expect(result).toBeLessThan(100);
    expect(result).toBeGreaterThan(0);
  });

  //test cold temperature condition
  test('returns lower score for cold temperature', () => {
    const tempK = 283.15;
    const humidity = 50;
    const windSpeed = 2;
    const result = computeComfortIndex(tempK, humidity, windSpeed);
    expect(result).toBeLessThan(100);
    expect(result).toBeGreaterThan(0);
  });

  //test humidity variations
  test('returns lower score for high humidity', () => {
    const tempK = 293.15;
    const humidity = 90;
    const windSpeed = 2;
    const result = computeComfortIndex(tempK, humidity, windSpeed);
    expect(result).toBeLessThan(100);
  });

  //test low humidity condition
  test('returns lower score for low humidity', () => {
    const tempK = 293.15;
    const humidity = 10;
    const windSpeed = 2;
    const result = computeComfortIndex(tempK, humidity, windSpeed);
    expect(result).toBeLessThan(100);
  });

  //test wind speed variations
  test('returns lower score for high wind speed', () => {
    const tempK = 293.15;
    const humidity = 50;
    const windSpeed = 10;
    const result = computeComfortIndex(tempK, humidity, windSpeed);
    expect(result).toBeLessThan(100);
  });

  //test no wind condition
  test('returns lower score for no wind', () => {
    const tempK = 293.15;
    const humidity = 50;
    const windSpeed = 0;
    const result = computeComfortIndex(tempK, humidity, windSpeed);
    expect(result).toBeLessThan(100);
  })

});