// Validates an IPv4 address and prints it in dotted and 32-bit binary.

const ip = process.argv[2];

if(!ip){
    console.log("Usage: node index.js <IPv4>");
    process.exit(1);
}

function isValidIP(ip){
    const parts = ip.split(".");

    if(parts.length !== 4) return false;

    for(const p of parts){
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

if (!isValidIP(ip)){
    console.log(`Invalid IPv4 address: ${ip}`);
    process.exit(1);
}

const binaryParts = ip.split(".").map(p=> octetToBinary(Number(p)));

console.log(`IP: ${ip}`);
console.log(`Binary: ${binaryParts.join(".")}`);
console.log(`32 bits: ${binaryParts.join("")}`);