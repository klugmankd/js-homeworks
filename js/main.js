var car = {};

function setProperty(object, name, value) {
    var writable = true, propertyValue = value, disabledFlag;
    switch (name) {
        case 'engine':
            writable = false;
            object.setAttribute('disabled', 'disabled');
            break;
        case 'isColorChangeable':
            var colors = document.getElementsByClassName("color");//,
            if (object.className === 'input checked') {
                object.className = 'input';
                disabledFlag = true;
            } else {
                object.className = 'input checked';
                disabledFlag = false;
            }
            for (var index = 0; index < colors.length; index++) {
                colors[index].disabled = disabledFlag
            }
            propertyValue = disabledFlag;
            break;
    }

    Object.defineProperty(car, name, {
        value: propertyValue,
        writable: writable
    });
    render(car);
}

function render(object) {
    if (object['name'] !== undefined)
        document.getElementById('name').innerText = object['name'];
    if (object['engine'] !== undefined)
        document.getElementById('engine').innerText = object['engine'];
    if (object['color'] !== undefined)
        document.getElementById('color').innerText = object['color'];
}

