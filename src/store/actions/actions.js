// actions: 用来处理异步修改数据的方法，使用dispatch触发

export default {
    updateCountSync (store, data) {
        setTimeout (() => {
            store.commit('actionsUpdateCount', data.num);
        }, data.time);
    }
};
