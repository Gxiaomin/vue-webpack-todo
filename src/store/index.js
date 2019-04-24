import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
  const store = new Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions
    // 分模块
    /* modules: {
            a: {
                // 避免不同模块命名冲突，调用时则使用 （a/updateText）的方式
                namespaced: true,
                state: {
                    text: 1,
                },
                mutations: {
                    updateText (state, text) {
                        state.text = text;
                    }
                },
                getters: {
                    // 第三个rootState参数为 全局的state对象
                    testPlus (state, getters, rootState) {
                        return state.text + rootState.count;
                    }
                },
                actions: {
                    // 参数ctx为：a模块中的上下
                    add ({state, commit, rootState}) {
                        // 此时所commit的updateText方法为a模块中。如果想要在全局找该方法，则传入{root: true}
                        // commit('updateText', rootState.count)
                        commit('updateCount', 66666, {root: true})
                    }
                }
            },
            b: {
                state: {
                    text: 2
                },
                actions: {
                    testActions ({commit}) {
                        commit('a/updateText', '88888', {root: true});
                    }
                }
            }
        } */
    // store 插件
    /* plugins: [
            (store) => {
                // 监听：参数一: 为要监听的值，参数二为该值变化时的回调函数
                store.watch(state => state.count, newCount => {
                    console.log('this is newCount: ' + newCount);
                });

                // 订阅: 监听到所有mutations的被调用情况
                store.subscribe((mutations, state) => {
                    console.log(mutations.type); // 被调用的mutations方法
                    console.log(mutations.payload); // 调用时传入的参数
                })
                // 订阅: 监听到所有actions的被调用情况
                store.subscribeAction((actions, state) => {
                    console.log(actions.type); // 被调用的actions方法
                    console.log(actions.payload); // 调用时传入的参数
                })
            }
        ] */
  })

  // vuex的热更新
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutaions = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutaions,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
