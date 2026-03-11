//'use strict';
/**
 * this returns Window or Global without strict mode, in strict
 * mode it returns undefined.
 * */

function whodis() {
    console.log(this)
}

//whodis()


const arrowLog = () => {
    this.apple = true;
    console.log(this)
}

//arrowLog()


const jeff = {
    face: '😆',
    whodis,
    face2face: function () {console.log(this.face + '😁')},
}


//jeff.whodis()
//jeff.face2face()


const itsJeff = whodis.bind(jeff);

//itsJeff()

whodis.call(jeff);



function Horse(name) {

    this.name = name;

    this.sayHello = function() {
        console.log('My name is ' + this.name)
    }

}

const myHorse = new Horse('ARITERIO');

//myHorse.sayHello()


const itsMyHorse = whodis.bind(myHorse)

//itsMyHorse()
