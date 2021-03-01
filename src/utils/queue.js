  class Queue {

    constructor() {
      this.queue = [];
      this.starting = false;
    }

    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async start() {
      if(this.starting === false) {
        try {
          this.starting = true;
          while (this.queue && this.queue.length > 0) {
            this.run();
            await this.delay(0.3);
          }
        } catch(error) {
          console.error(error);
        } finally {
          this.starting = false;
        }
      }
    }
    
    run() {
      var taskWithParams = this.queue.shift();
      var task = taskWithParams[0];
      var params = taskWithParams[1];
      var resolve = taskWithParams[2];
      var reject = taskWithParams[3];
      if (params) {
        const result = task(params);
        if (result instanceof Promise) {
          result.then(function(data) {
            resolve(data);
          }).catch(function(error) {
            reject(error);
          });
        } else {
          resolve(result);
        }
      } else {
        const result = task();
        if (result instanceof Promise) {
          result.then(function(data) {
            resolve(data);
          }).catch(function(error) {
            reject(error);
          });
        }
      }
    }

    append(task) {
      this.queue.push(task);
      this.start();
    }

  }
  queue = new Queue();

  const f1 = async function fun(param) {
    return fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
  }

  function resolve(result) {
    console.log("resolve", result.json());
  }

  function reject(error) {
    console.log("reject", error);
  }

  var tasks = [
    [f1, [1], resolve, reject],
    [function () {console.log("bbb");}, null, null, null],
  ];
  for (i = 0; i < tasks.length; i++) {
    queue.append(tasks[i]);
  }