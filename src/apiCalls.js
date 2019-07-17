export const fetchTrivia = () => {
  return fetch('https://opentdb.com/api.php?amount=10&category=17&type=boolean')
  .then(response => {
    if (!response.ok) return new Error('Error fetching trivia');
    return response.json()
  })
}
