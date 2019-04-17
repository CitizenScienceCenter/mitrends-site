const state = {
    language: undefined,
    wizardSeen: false
};

const getters = {
};

const actions = {
    setLanguage({state, commit, rootState}, language) {
        commit('SET_LANGUAGE', language);
    },
    setWizardSeen({state, commit, rootState}) {
        console.log('action wizard');
        commit('SET_WIZARDSEEN');
    }
};

const mutations = {
    SET_LANGUAGE(state, language) {
        state.language = language
    },
    SET_WIZARDSEEN(state) {
        console.log('mutate wizard');
        state.wizardSeen = true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
