<template>
  <div class="ui container">
    <div class="ui comments" v-for="question in questions" :key="question.question_id">
      <div class="comment">
        <a class="avatar">
          <img :src="question.owner.profile_image">
        </a>
        <div class="content">
          <a class="author">{{ question.owner.display_name }}</a>
          <div class="metadata">
            <div>{{ new Date(question.creation_date*1000).toLocaleDateString() }}</div>
            <div><i class="star icon"></i>{{ question.score }} Votes</div>
            <div><i class="comment icon"></i>{{ question.answer_count }} answers</div>
          </div>
          <div v-for="tag in question.tags" :key="tag" class="ui mini label">{{ tag }}</div>
          <div class="text">
            {{ question.title }}
          </div>
          <div v-if="question.is_answered" class="actions">
            <a :href="question.link">View answers</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questions from '../api/stackoverflow-search-multiple.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      questions: questions.items
    }
  }
}
</script>
