(function() {

    var initialState = {
        data: 0
    };

    function reducer(state, action) {

        if (typeof state === 'undefined') {
            return initialState;
        }

        switch(action.type) {
            case 'ACTION_INCREMENT':
                return {
                    data: state.data + 1
                };
            case 'ACTION_DECREMENT':
                return {
                    data: state.data - 1
                };
            case 'ACTION_DOUBLE':
                return {
                    data: state.data * 2
                };
            case 'ACTION_CLEAR':
                return initialState;
        }
    }

    window.store = window.Redux.createStore(reducer);

})();

