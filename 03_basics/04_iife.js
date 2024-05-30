// (IIFE) Imediately Invoked Function Expression

(function chai(){
    // this is named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // this is un named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('manas')