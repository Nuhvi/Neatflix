import MDB from "@/api/MDB";
import { mapIdToSelf, createMovieItem } from "./helpers";

export default {
  namespaced: true,
  state: { byId: {} },
  mutations: {
    UPDATE(state: any, payload: any) {
      state.byId = { ...state.byId, ...payload };
    }
  },
  actions: {
    update(context: any, payload: [{ id: number }]) {
      const standardizedPayload = payload.map((item: any) => createMovieItem(item, context));
      const map = mapIdToSelf(standardizedPayload);
      context.commit("UPDATE", map);
    }
  },
  getters: {}
};
