const solution = function(isBadVersion) {

  return function(n) {
    let start = 1, end = n;
    while (start < end) {
        let mid = Math.floor(start + (end-start) / 2);
        if(isBadVersion(mid)) {
            end = mid;
        } else {
            start = mid + 1
        }
    }
      return start;
  };
};

const solutionTwo = function(isBadVersion) {
  return function(n) {
      let min = null;
      let start = 1;
      let end = n;
      
      while(start <= end) {
          const mid = Math.floor((start + end) / 2);
          
          if(isBadVersion(mid)) {
              min = mid;
              end = mid - 1;
          } else {
              start = mid + 1;
          }
      }
      return min;
  };
};

