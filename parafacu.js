const io = require('console-read-write');
 
async function main() {
  // Simple readline scenario
  io.write('Programa Facu Cagón');
  io.write(await io.read());
 
  // Simple question scenario
  io.write(`Hola! ${await io.ask('Dime tu nombre..')}!`);
 
  // Since you are not blocking the IO, you can go wild with while loops!
  let saidHi = false;
  while (!saidHi) {
    io.write('Say hi or I will repeat...');
    saidHi = await io.read() === 'hi';
  }
 
  io.write('Thanks! Now you may leave.');
}
 
main();