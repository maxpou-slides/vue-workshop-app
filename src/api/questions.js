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

/**
 * @param {number} question id
 * @return {Promise<Object>} List of answers
 * @see {@link https://api.stackexchange.com/docs/answers-on-questions#order=desc&sort=activity&ids=30877491&filter=!9Z(-wzu0T&site=stackoverflow&run=true}
 * @see {@link https://api.stackexchange.com/docs/types/answer}
 */
export function getAnswers (id) {
  return axios.get(`${process.env.API_URL}questions/${id}/answers?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wzu0T`)
}

/**
 * @param {number} question id
 * @return {Promise<Object>} Question
 * @see {@link https://api.stackexchange.com/docs/questions-by-ids#order=desc&sort=activity&ids=30877491&filter=!-*jbN-o9Aeie&site=stackoverflow&run=true}
 * @see {@link https://api.stackexchange.com/docs/types/question}
 */
export function getQuestion (id) {
  return axios.get(`${process.env.API_URL}questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=!-*jbN-o9Aeie`)
}
