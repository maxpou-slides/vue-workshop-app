<template>
  <div class="ui container">
    <div class="ui comments" v-for="question in questions" :key="question.question_id">
      <question-list-item :question="question" />
    </div>
  </div>
</template>

<script>
import questions from '../api/stackoverflow-search-multiple.json'
import QuestionListItem from './QuestionListItem'

export default {
  name: 'QuestionList',
  components: {
    QuestionListItem
  },
  data () {
    return {
      questions: questions.items
    }
  }
}
</script>
