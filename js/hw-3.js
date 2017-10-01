var events = [
        'mousedown', 'mouseup', 'click',
        'focus', 'blur', 'change',
        'keydown', 'keypress', 'keyup'
    ],
    documentEvents = [
        { event: 'onEscape', key: 27 },
        { event: 'onEnter', 	key: 13 },
        { event: 'onLeft', 	key: 37 },
        { event: 'onRight', 	key: 39 },
        { event: 'onUp', 		key: 38 },
        { event: 'onDown', 	key: 40 },
        { event: 'onSpace', 	key: 32 },
        { event: 'onShft', 	key: 16 },
        { event: 'onCtrl', 	key: 17 }
    ];
function $(selector) {
    var resultSelector;
    // if (selector === document){
    //     resultSelector = document;
    //     documentEvents.map(function(eventObj){
    //         resultSelector[eventObj.event] = function(callback) {
    //             resultSelector.keydown(function(e){
    //                 if (callback && e.keyCode === eventObj.key){
    //                     callback.call(e);
    //                 }
    //             });
    //         }
    //     });
    // } else {
        resultSelector = document.querySelector(selector);
        events.map(function(eventName){
            resultSelector[eventName] = function(callback) {
                resultSelector.addEventListener(eventName, function(e){
                    callback.call(e);
                }, false);
            }
        });
    // }
    return resultSelector;
}

documentEvents.map(function (eventObject) {
    eventObject.event = function (callback) {
        $(document).keydown(function (e) {
            if (callback && e.keyCode === eventObject.key){
                callback.call(e);
            }
        })
    }
});


$("#span").click(function () {
    console.log("span click");
});

$("#button").click(function () {
    console.log("button click");
});

$("#input").blur(function () {
    console.log("blur");
});

$("#input").focus(function () {
    console.log("focus");
});

$("#input").change(function () {
    console.log("change");
});

$("#input").keydown(function () {
    console.log("keydown");
});

$("#input").keypress(function () {
    console.log("keypress");
});

$("#input").keyup(function () {
    console.log("keyup");
});

$("#mouseupdown").mouseup(function () {
    console.log("mouse up");
});

$("#mouseupdown").mousedown(function () {
    console.log("mouse down");
});
//
// $(document).onUp(function () {
//     console.log("enter");
// });