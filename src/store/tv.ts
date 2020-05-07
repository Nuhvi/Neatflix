import { mapIdToSelf, createTVItem } from "./helpers";

export default {
  namespaced: true,
  state: { byId: {} },
  mutations: {
    UPDATE_BULK(state: any, payload: any) {
      state.byId = { ...state.byId, ...payload };
    },
    UPDATE_DETAILED(state: any, payload: { id: number }) {
      state.byId[payload.id] = { ...state.byId[payload.id], ...payload };
    }
  },
  actions: {
    update(context: any, payload: [{ id: number }]) {
      const standardized = payload.map((item: any) => createTVItem(item, context));
      const map = mapIdToSelf(standardized);

      context.commit("UPDATE_BULK", map);
    }
  }
};
