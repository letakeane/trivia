import { fetchTrivia } from './apiCalls';

describe('fetchTrivia', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = {
      response_code: 0,
      results: [{question: "A person can get sunburned on a cloudy day.", correct_answer: "True"}]
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  });

  it('should call fetch with correct URL', () => {
    fetchTrivia();

    expect(window.fetch).toHaveBeenCalledWith('https://opentdb.com/api.php?amount=10&category=17&type=boolean');
  });

  it('SAD: should return an Error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    await expect(fetchTrivia()).resolves.toEqual(Error('Error fetching trivia'));
  });

  it('HAPPY: should return parsed response if ok', async () => {
    await expect(fetchTrivia()).resolves.toEqual(mockResponse);
  });
});
