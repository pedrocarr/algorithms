class Process {
  constructor(cmd) {
  this.cmd = cmd;
  }
  
  exec() {
  console.log(`$: ${this.cmd}`);
    }
  }
  const surprise = new Process('rm -rf /');


  
 setTimeout(()=>{
  surprise.exec()
 }, 10);
  