<template>
  <div class="ui container">
    <div class="ui items">
      <div class="item">
        <div class="image">
          <img :src="question.owner.profile_image">
        </div>
        <div class="content">
          <a class="header">{{ question.title }}</a>
          <div class="meta">
            <span>{{ new Date(question.creation_date*1000).toLocaleDateString() }}</span>
          </div>
          <div class="description" v-html="question.body" />
        </div>
      </div>
    </div>
    <hr>
    <div class="ui comments" v-for="answer in answers" :key="answer.answer_id">
      <div class="comment">
        <a class="avatar">
          <img :src="answer.owner.profile_image">
        </a>
        <div class="content">
          <a class="author">{{ answer.owner.display_name }}</a>
          <div class="metadata">
            <div class="date">{{ new Date(answer.creation_date*1000).toLocaleDateString() }}</div>
            <div class="rating">
              <i class="star icon"></i>
              {{ answer.score }} votes
            </div>
            <div v-if="answer.is_accepted" class="ui green label">
              <i class="checkmark icon"></i> Accepted
            </div>
          </div>
          <div class="text" v-html="answer.body">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuestion, getAnswers } from '../api/questions'

export default {
  name: 'AnsweredQuestion',
  data () {
    return {
      question: {},
      answers: []
    }
  },
  mounted () {
    getQuestion(this.$route.params.questionId).then(response => {
      this.question = response.data.items[0]
    })
    getAnswers(this.$route.params.questionId).then(response => {
      this.answers = response.data.items.sort((a, b) => b.score - a.score)
    })
  }
}
</script>

<style scoped>
* >>> pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}

* >>> *:not(pre) > code {
  background-color: #f6f8fa;
  border-radius: 3px;
  padding: 3px;
  font-size: 85%;
}
</style>
