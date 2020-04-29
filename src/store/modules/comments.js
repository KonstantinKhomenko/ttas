import Vue from "vue";

const commentsStore = {
  namespaced: true,
  state: {
    commentsList: {
      1: {
        comment:
          "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",
        name: "Лилия Семёновна",
        date: new Date(),
        id: 1,
      },
      2: {
        comment:
          "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
        name: "Лилия Семёновна",
        date: new Date(),
        id: 2,
      },
      3: {
        comment: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ",
        name: "Самуил",
        date: new Date(),
        id: 3,
      },
    },
  },
  mutations: {
    ADD_COMMENT(state, obj) {
      Vue.set(state.commentsList, obj.id, obj);
    },
  },
  actions: {
    addComment({ commit }, obj) {
      commit("ADD_COMMENT", obj);
    },
  },
  getters: {
    getComments: ({ commentsList }) => {
      return Object.values(commentsList).reverse();
    },
  },
};

export default commentsStore;
