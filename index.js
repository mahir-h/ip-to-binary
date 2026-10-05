// Goal:
// IP:      192.168.10.5
// Binary:  11000000.10101000.00001010.00000101
// 32-bit:  11000000101010000000101000000101

const ip = process.argv[2];

if(!ip){
    console.log("Usage: node index.js <IPv4>");
    process.exit(1);
}

function isValidIP(ip){
    const parts = ip.split(".");

    if(parts.length != 4) return false;

    for(const p of parts){
        // const num = Number(p); (this would not eliminate things like decimals.)
        if(!/^\d{1,3}$/.test(p)) return false;
        if(Number(p) > 255) return false;
    }
    return true; 
}

function octetToBinary(n){
    const values = [128,64,32,16,8,4,2,1];
    let left = n;
    let bits = "";

    for (const v of values){
        if(v <= left){
            bits += "1";
            left -= v;
        }else{
            bits += "0";
        }
    }
    return bits;
}

if (!isValidIP){
    console.log(`Invalid IPv4 address: ${ip}`);
    process.exit(1);
}

const binaryParts = ip.split(".").map(p=> octetToBinary(Number(p)));

console.log(`IP: ${ip}`);
console.log(`Binary: ${binaryParts.join(".")}`);
console.log(`32 bits: ${binaryParts.join("")}`);