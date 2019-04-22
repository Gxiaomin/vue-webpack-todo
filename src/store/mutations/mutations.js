// mutations: 用来处理同步修改数据的方法，使用commit触发

export default {
    updateCount: (state, count) => {
        state.count = count;
    },

    actionsUpdateCount: (state, num) => {
        state.syncCount = num;
    }
};
