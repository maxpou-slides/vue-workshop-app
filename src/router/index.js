import Vue from 'vue'
import Router from 'vue-router'
import QuestionList from '@/components/QuestionList'
import AnsweredQuestion from '@/components/AnsweredQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuestionList',
      component: QuestionList
    }, {
      path: '/:questionId',
      name: 'AnsweredQuestion',
      component: AnsweredQuestion
    }
  ]
})
