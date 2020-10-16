console.log('Yes, I am invoked')
let val;
function onMenuClick(step) {
    if(step === 'R'){
        val = val === undefined ? 2 : (val) % 3 + 1;
    } else {
        val = val === undefined ? 3 : val === 1 ? 3: Math.abs(val - 1) % 3;
    }
    console.log(`yet to be implemented!!${val}`)
}
