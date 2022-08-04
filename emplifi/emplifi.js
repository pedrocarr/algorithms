class Process {
  constructor(cmd) {
  this.cmd = cmd;
  this.exec = this.exec.bind(this);
  }
  
  exec() {
  console.log(`$: ${this.cmd}`);
    }
  }
  const surprise = new Process('rm -rf /');


  
 setTimeout(surprise.exec, 10);
  