window.StoreFactoryUploads =
(function($, Vue) {

    return function({ endpoint }) {

        return {

            state: {
            },

            actions: {

                'upload/image': ({ commit, state, rootState }, { file, settings }) => {

                    let fd = new FormData();
                    fd.append('file', file)
                    fd.append('settings', JSON.stringify(settings))

                    return Vue.http
                        .post(`${endpoint}/me/uploads/images`, fd, {
                            headers: {
                                Authorization: rootState.security.principal.token || undefined
                            }
                        })
                    ;
                },

                'upload/image/list': ({ commit, state, rootState }, { aspect }) => {

                    return Vue.http
                        .get(`${endpoint}/uploads/images`, {
                            params: { aspect },
                            headers: {
                                Authorization: rootState.security.principal.token || undefined
                            }
                        })
                    ;
                },

                'upload/image/id/remove': ({ commit, state, rootState }, { id }) => {
                    return Vue.http.delete(`${endpoint}/uploads/images/i/${id}`, {
                        headers: $.extend({}, {
                            Authorization: rootState.security.principal.token || undefined
                        })
                    });
                },

                'upload/file': ({ commit, state, rootState }, { file, settings }) => {

                    let fd = new FormData();
                    fd.append('file', file)
                    fd.append('settings', JSON.stringify(settings))

                    return Vue.http
                        .post(`${endpoint}/me/uploads/files`, fd, {
                            headers: {
                                Authorization: rootState.security.principal.token || undefined
                            }
                        })
                    ;
                },

                'upload/file/list': ({ commit, state, rootState }, { aspect }) => {

                    return Vue.http
                        .get(`${endpoint}/uploads/files`, {
                            params: { aspect },
                            headers: {
                                Authorization: rootState.security.principal.token || undefined
                            }
                        })
                    ;
                },

                'upload/file/id/remove': ({ commit, state, rootState }, { id }) => {
                    return Vue.http.delete(`${endpoint}/uploads/files/i/${id}`, {
                        headers: $.extend({}, {
                            Authorization: rootState.security.principal.token || undefined
                        })
                    });
                },
            },
        }
    }

})(jQuery, Vue);
