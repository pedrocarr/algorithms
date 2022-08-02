class Process {
  constructor(cmd) {
  this.cmd = cmd;
  }
  
  exec() {
  console.log(`$: ${this.cmd}`);
    }
  }

 console.log(setTimeout(()=>{
  const surprise = new Process('rm -rf /');
  surprise.exec();
}, 10)) 

  