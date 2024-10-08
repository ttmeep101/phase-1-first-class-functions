function receivesAFunction(f){
    return f();
}

function returnsANamedFunction(){
    return function main(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}