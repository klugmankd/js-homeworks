function OperationSystem() {
    this.isPrimary = true;
    this.name = '';
    this.caption = '';
    this.parent = '';
    this.siblings = [];
    return this;
}

OperationSystem.prototype.equalProto = function (prototype) {
    return this instanceof prototype;
};

var OSFabric = function (ChildProto, isPrimary, name, caption, ParentProto) {
    ChildProto.prototype = Object.create(ParentProto.prototype);
    var tempOS = new ChildProto();
    tempOS.isPrimary = isPrimary;
    tempOS.name = name;
    tempOS.caption = caption;
    tempOS.parent = ParentProto.name;
    return tempOS;
};

//Debian
function Debian() {}

function Ubuntu() {}

function NUbuntu() { this.siblings = [Kubuntu.name, Lubuntu.name] }

function Kubuntu() { this.siblings = [Lubuntu.name, NUbuntu.name] }

function Lubuntu() { this.siblings = [Kubuntu.name, NUbuntu.name] }

function Ulteo() {}

function PepperMintOS() {}

//RedHat
function RedHat() {}

function CentOS() {}

function AsteriksHome() { this.siblings = [BlueOnix.name, Elastix.name] }

function Elastix() { this.siblings = [BlueOnix.name, AsteriksHome.name] }

function BlueOnix() { this.siblings = [Elastix.name, AsteriksHome.name] }


var debian = OSFabric(Debian, true, 'Debian', "bla bla", OperationSystem),
    ubuntu = OSFabric(Ubuntu, false, 'Ubuntu', 'ubuntu - is cool!', Debian),
    kubuntu = OSFabric(Kubuntu, false, 'Kubuntu', 'Kubuntu - extend from Ubuntu', Ubuntu),
    lubuntu = OSFabric(Lubuntu, false, 'Lubuntu', 'Lubuntu - extend from Ubuntu', Ubuntu),
    nUbuntu = OSFabric(Lubuntu, false, 'nUbuntu', 'nUbuntu - extend from Ubuntu', Ubuntu),
    peppermintOS = OSFabric(PepperMintOS, false, 'PepperMintOS', 'PepperMintOS - extend from Lubuntu', Lubuntu),
    ulteo = OSFabric(Ulteo, false, 'Ulteo', 'Ulteo - extend from Kubuntu', Kubuntu),
    redHat = OSFabric(RedHat, true, 'RedHat', 'RedHat - bla bla', OperationSystem),
    centOS = OSFabric(CentOS, false, 'CentOS', 'Ulteo - bla bla', RedHat),
    asteriksHome = OSFabric(AsteriksHome, false, 'AsteriksHome', 'AsteriksHome - bla bla', CentOS),
    elastix = OSFabric(Elastix, false, 'Elastix', 'Elastix - bla bla', CentOS),
    blueOnix = OSFabric(BlueOnix, false, 'BlueOnix', 'BlueOnix - bla bla', CentOS);


var oss  = {
    "Debian": debian,
    "Ubuntu": ubuntu,
    "Kubuntu": kubuntu,
    "Lubuntu": lubuntu,
    "nUbuntu": nUbuntu,
    "Ulteo": ulteo,
    "PeppermintOS": peppermintOS,
    "RedHat": redHat,
    "centOS": centOS,
    "asteriksHome": asteriksHome,
    "elastix": elastix,
    "blueOnix": blueOnix
};


function log(objects) {
    for (var os in objects) {
        console.log("\n=============>" + objects[os]['name'] + "<=============\n");
        console.log("Caption: " + objects[os]['caption'] + ";");
        if (!objects[os]['isPrimary'])
            console.log("Extending: Class " + objects[os]['name'] + " - extends from " + objects[os]['parent']);
        else
            console.log("Class " + objects[os]['name'] + " - is Primary");
        if (objects[os]['siblings'] !== undefined)
            console.log("Siblings: " + objects[os]['siblings']);
    }
}

log(oss);