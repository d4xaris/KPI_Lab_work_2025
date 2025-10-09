// Перетворення IP-адреси (IPv4) у число

function ipToNumber(ip) {
  const parts = ip.split(".").map(Number);
  let result = 0;

  for (let i = 0; i < 4; i++) {
    result += parts[i] << ((3 - i) * 8);
  }
  return result;
}

console.log(ipToNumber("10.0.0.1"));
console.log(ipToNumber("127.0.0.1"));
console.log(ipToNumber("192.168.1.10"));
console.log(ipToNumber("8.8.8.8"));
