import axios from 'axios'

/**
 * @param {string="vue"} search
 * @return {Promise<Object>} List of questions
 * @see {@link https://api.stackexchange.com/docs/search}
 * @see {@link https://api.stackexchange.com/docs/types/question}
 */
export function searchQuestions (search = 'vue') {
  return axios.get(`${process.env.API_URL}search?order=desc&sort=votes&intitle=${search}&site=stackoverflow`)
}
