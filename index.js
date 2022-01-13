function receivesAFunction(cb) {
return cb();
}

receivesAFunction(function(){return 5 + 3});

function returnsANamedFunction() {
    const aNamedFunction = function addIt(){return 4 + 9};
    return aNamedFunction;
}

returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function(){
        console.log("Incognito");
    }
}

returnsAnAnonymousFunction();