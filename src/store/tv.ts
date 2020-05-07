import MDB from "@/api/MDB";
import { mapIdToSelf } from "./helpers";

export default {
  namespaced: true,
  state: {
    byId: {}
  },
  mutations: {
    UPDATE(state: any, payload: [{ id: number }]) {
      state.byId = { ...state.byId, ...mapIdToSelf(payload) };
    }
  },
  actions: {},
  getters: {}
};
