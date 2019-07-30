
(function($, store) {

    function setEventHandlers() {
        $("#incrementBtn").click(function() {
            store.dispatch({type: 'ACTION_INCREMENT'});
        });
        $("#decrementBtn").click(function() {
            store.dispatch({type: 'ACTION_DECREMENT'});
        });
        $("#doubleBtn").click(function() {
            store.dispatch({type: 'ACTION_DOUBLE'});
        });
        $("#clearBtn").click(function() {
            store.dispatch({type: 'ACTION_CLEAR'});
        });
    }

    function updateStateElem() {
        $("#state").html(store.getState().data);
    }

    function setStateChangeHandler() {
        updateStateElem();

        store.subscribe(function() {
            updateStateElem();
        });
    }

    $(function() {
        setEventHandlers();
        setStateChangeHandler();
    });

})(jQuery, store);

