class Process {
  constructor(cmd) {
  this.cmd = cmd;
  // this.exec = this.exec.bind(this);
  }

  exec() {
  console.log(`$: ${this.cmd}`);
    }
  }
  const surprise = new Process('rm -rf /');


setTimeout(surprise.exec.bind(surprise), 1000);

setTimeout(()=>{surprise.exec()}, 1000);

console.log('Here');
