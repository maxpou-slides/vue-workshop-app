<template>
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
        <router-link
          :to="{ name: 'AnsweredQuestion', params: { questionId: question.question_id }}"
          >View answers</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionListItem',
  props: {
    question: {
      type: Object
    }
  }
}
</script>
