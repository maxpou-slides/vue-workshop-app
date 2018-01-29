<template>
  <div class="ui container">
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="https://semantic-ui.com/images/avatar/small/stevie.jpg">
        </a>
        <div class="content">
          <a class="author">John Doe</a>
          <div class="metadata">
            <div>1 april 2017</div>
            <div><i class="star icon"></i>1000 Votes</div>
            <div><i class="comment icon"></i>5 answers</div>
          </div>
          <div class="ui mini label">Vue.js</div>
          <div class="text">
            Hey guys, how do you bind data to the DOM?
          </div>
          <div class="actions">
            <a href="https://stackoverflow.com/questions/1">View answers</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      question: {
        tags: ['javascript', 'vue.js', 'vue-resource', 'vuex'],
        owner: {
          reputation: 3410,
          user_id: 2294225,
          user_type: 'registered',
          accept_rate: 92,
          profile_image: 'https://i.stack.imgur.com/07yK6.jpg?s=128&g=1',
          display_name: 'Stephan-v',
          link: 'https://stackoverflow.com/users/2294225/stephan-v'
        },
        is_answered: true,
        view_count: 5252,
        accepted_answer_id: 38074979,
        answer_count: 1,
        score: 14,
        last_activity_date: 1467114417,
        creation_date: 1467106122,
        last_edit_date: 1467114417,
        question_id: 38072302,
        link: 'https://stackoverflow.com/questions/38072302/structuring-a-vue-vuex-project',
        title: 'Structuring a Vue + Vuex project'
      }
    }
  }
}
</script>
