var UnixOSFabric = function (isPrimary, name, caption, parent) {

    var tempOS = new UnixOS(isPrimary, name, caption, parent);

    tempOS.equalProto = function (prototype) {
        return tempOS instanceof prototype;
    };

    return tempOS;
};

function UnixOS(isPrimary, name, caption, parent) {
    this.isPrimary = isPrimary;
    this.name = name;
    this.caption = caption;
    this.parent = parent;
    this.equalProto = function () {};

    return this;
}

var debian = UnixOSFabric(true, 'debian', 'bla bla', null);

console.log(debian);
console.log(debian.equalProto(UnixOS));

var ubuntu = UnixOSFabric(false, 'ubuntu', '');



