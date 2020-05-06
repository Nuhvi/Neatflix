import MDB from "@/api/MDB";

export default {
  namespaced: true,
  state: {
    byId: {}
  },
  mutations: {
    UPDATE(state: any, payload: [{ id: number }]) {
      payload.forEach((item: { id: number }) => {
        state.byId = {
          ...state.byId,
          [item.id]: item
        };
      });
    }
  },
  actions: {},
  getters: {}
};
