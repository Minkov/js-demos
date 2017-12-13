printLogo1();
printLogo2();

const printLogo3 = () => {
    console.log('2');
    // console.log(this);
    console.log('Telerik Academy');
    console.log('JS Alpha');
};

/* eslint-disable */
const printLogo2 = function () {
    console.log('2');
    // console.log(this);
    console.log('Telerik Academy');
    console.log('JS Alpha');
};

/* eslint-enable */

// declaration
/* eslint-disable */
function printLogo1() {
    console.log('1');
    console.log('Telerik Academy');
    console.log('JS Alpha');
}
/* eslint-enable */
