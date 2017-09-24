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

var debian = OSFabric(Debian, true, 'Debian', "The Debian Project is an association of individuals who have made common cause to create a free operating system. This operating system that we have created is called Debian. " +
        "An operating system is the set of basic programs and utilities that make your computer run. At the core of an operating system is the kernel. The kernel is the most fundamental program on the computer and does all the basic housekeeping and lets you start other programs.", OperationSystem),
    ubuntu = OSFabric(Ubuntu, false, 'Ubuntu', "Ubuntu is an open source operating system software for computers. It is one of the distribution systems of Linux, and is based on the Debian architecture. It is usually run on personal computers, and is also popular on network servers, usually running the Ubuntu Server variant, with enterprise-class features.", Debian),
    kubuntu = OSFabric(Kubuntu, false, 'Kubuntu', "Kubuntu is an official flavour of the Ubuntu operating system which uses the KDE Plasma Desktop instead of the GNOME graphical environment. As part of the Ubuntu project, Kubuntu uses the same underlying systems. Every package in Kubuntu shares the same repositories as Ubuntu, and it is released regularly on the same schedule as Ubuntu.", Ubuntu),
    lubuntu = OSFabric(Lubuntu, false, 'Lubuntu', "Lubuntu is a lightweight Linux distribution based on Ubuntu but using the LXDE desktop environment in place of Ubuntu's Unity shell and GNOME desktop.", Ubuntu),
    nUbuntu = OSFabric(Lubuntu, false, 'nUbuntu', "nUbuntu or Network Ubuntu was a project to take the existing Ubuntu operating system LiveCD and Full Installer and remaster it with tools needed for penetration testing servers and networks. The main idea is to keep Ubuntu's ease of use and mix it with popular penetration testing tools. Besides usage for network and server testing, nUbuntu will be made to be a desktop distribution for advanced Linux users.", Ubuntu),
    peppermintOS = OSFabric(PepperMintOS, false, 'PepperMintOS', "Peppermint Linux OS is a cloud-centric OS based on Lubuntu, a derivative of the Ubuntu Linux operating system that uses the LXDE desktop environment. Peppermint's developers have written about their principles of providing a familiar environment for newcomers to Linux, which requires relatively low hardware resources to run.", Lubuntu),
    ulteo = OSFabric(Ulteo, false, 'Ulteo', "Ulteo Open Virtual Desktop (OVD) is an open source Application Delivery and Virtual Desktop infrastructure project that can deliver applications or a desktop hosted on a Linux or Windows server to end users. It is an open source alternative to Citrix and VMware solutions and, as of June 2012, the only presentation virtualization solution supporting both Linux and Windows applications. It was created by Gaël Duval, who previously created Mandriva Linux.", Kubuntu),
    redHat = OSFabric(RedHat, true, 'RedHat', "Red Hat Linux, assembled by the company Red Hat, was a widely used Linux distribution until its discontinuation in 2004. Early releases of Red Hat Linux were called Red Hat Commercial Linux. Red Hat first published the software on November 3, 1994. It was the first Linux distribution to use the RPM Package Manager as its packaging format, and over time has served as the starting point for several other distributions, such as Mandriva Linux and Yellow Dog Linux.", OperationSystem),
    centOS = OSFabric(CentOS, false, 'CentOS', "CentOS is a Linux distribution that attempts to provide a free, enterprise-class, community-supported computing platform functionally compatible with its upstream source, Red Hat Enterprise Linux (RHEL).", RedHat),
    asteriksHome = OSFabric(AsteriksHome, false, 'AsteriksHome', "Asterisk is a software implementation of a telephone private branch exchange (PBX); it allows attached telephones to make calls to one another, and to connect to other telephone services, such as the public switched telephone network (PSTN) and Voice over Internet Protocol (VoIP) services.", CentOS),
    elastix = OSFabric(Elastix, false, 'Elastix', "Elastix is an unified communications server software that brings together IP PBX, email, IM, faxing and collaboration functionality. It has a Web interface and includes capabilities such as a call center software with predictive dialing.", CentOS),
    blueOnix = OSFabric(BlueOnix, false, 'BlueOnix', "It is the mission of BlueOnyx to provide a fully-integrated Internet hosting platform that includes web, email, DNS and file transfer services from a simple, user-friendly web-based interface that is easily installed on commodity hardware or virtual private server.", CentOS);

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