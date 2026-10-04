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
    for(const p of parts){

        if(parts.length != 4) return `Invalid IP input`;

        const num = Number(p);
        if(p !=="" && num >= 0 && num <=255){}
        else{return `Invalid IP input`;}

    }
    return `Valid IP input`;
}

console.log(isValidIP(ip));