<template>
  <div class="ui container">
    <div class="ui comments" v-for="question in questions" :key="question.question_id">
      <question-list-item :question="question" />
    </div>
  </div>
</template>

<script>
import { searchQuestions } from '../api/questions'
import QuestionListItem from './QuestionListItem'

export default {
  name: 'QuestionList',
  components: {
    QuestionListItem
  },
  data () {
    return {
      questions: []
    }
  },
  mounted () {
    searchQuestions('vue').then(response => {
      this.questions = response.data.items
    })
  }
}
</script>
