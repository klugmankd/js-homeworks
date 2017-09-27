Object.prototype.onEventDone = function (string) {
    return eventFunction;
};

var block = document.getElementById('blure');

(function () {
    test(block, 'blur click keypress');
})();

function test(element, event) {
    var events = {
        "mousedown": "mousedown",
        "mouseup": "mouseup",
        "click": "click",
        "focus": "focus",
        "blur": "blur",
        "change": "change",
        "keydown": "keydown",
        "keypress": "keypress",
        "keyup" : "keyup"
    };

    if (event.indexOf(event.indexOf(events['click']) !== -1)) {
        element.onclick = function () {
            console.log("click");
        }
    }

    if (event.indexOf(events['mousedown']) !== -1) {
        element.onmousedown = function () {
            console.log("mousedown");
        }
    }

    if (event.indexOf(events['mouseup']) !== -1) {
        element.onmouseup = function () {
            console.log("mouseup");
        }
    }

    if (event.indexOf(events["blur"]) !== -1) {
        element.onblur = function () {
            console.log("blur");
        }
    }

    if (event.indexOf(events["keypress"]) !== -1) {
        element.onkeypress = function () {
            console.log("keypress");
        }
    }

    if (event.indexOf(events["keyup"]) !== -1) {
        element.onkeyup = function () {
            console.log("keyup");
        }
    }

    if (event.indexOf(events["keydown"]) !== -1) {
        element.onkeydown = function () {
            console.log("keydown");
        }
    }

    if (event.indexOf(events["change"]) !== -1) {
        element.onchange = function () {
            console.log("change");
        }
    }

    if (event.indexOf(events["focus"]) !== -1) {
        element.onfocus = function () {
            console.log("focus");
        }
    }
}

function fib(n) {
    if (n > 1) {
        n = fib(n - 2) + fib(n - 1);
    }
    return n;
}