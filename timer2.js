const stdin = process.stdin;
const stdout = process.stdout;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
/* string codes
ctrl+c = '\u0003'
sound  = '\x07'
event handling */
  stdin.on('data', (key) => {
    switch (key) {
      case "b":
        stdout.write('\x07');
        break;
      case "\u0003":
        stdout.write('Thanks for using me, ciao!\n');
        process.exit();
        break;
      default:
        if (Number(key)) {
          stdout.write(`setting timer for ${key} seconds\n`);
          setTimeout(() => process.stdout.write('\x07'), key * 1000);
        }
    }
  });