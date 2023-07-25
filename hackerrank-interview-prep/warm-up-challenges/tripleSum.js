function bynarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while(start < end) {
    const mid = Math.floor((start + end) / 2);
    if(arr[mid] === num) return mid + 1;
    if(arr[mid] < num){
      start = mid + 1;
      if(arr[start] > num) return start;


    }else {
      end = mid;
    }
  }

  return end;
}

function triplets(a, b, c) {
  a = [...new Set(a)];
  c = [...new Set(c)];


  a.sort((a, b) => a - b);
  c.sort((a, b) => a - b);


  b = new Set(b);

  let total = 0;

  for(const num of b) {
    if(num < a[0] || num < c[0]) continue;

    let ai = 0;
    let ci = 0;
    if(a[a.length - 1] <= num){
      ai = a.length;
    } else {
      ai = bynarySearch(a, num);
    }

    if(c[c.length - 1] <= num){
      ci = c.length;
    } else {
      ci = bynarySearch(c, num)
    }
    total += ai * ci;
  }

  return total
}

function triplets(a, b, c) {

  const A = a.sort((a, b) => a - b);
  const B = b.sort((a, b) => a - b);
  const C = c.sort((a, b) => a - b);

  const ha = {};
  const hb = {};
  const hc = {};

  let ai = 0, bi = 0, ci = 0, count_a = 0, count_b = 0, count_c = 0;
  let count = 0;

  while (bi < B.length) {
      if (!hb[B[bi]]) {
          while (ai < A.length && A[ai] <= B[bi]) {
              if(!ha[ A[ai] ]){
                  ha[ A[ai] ] = 1;
                  count_a++;
              }
              ai++;
          }
          while (ci < C.length && C[ci] <= B[bi]) {
              if(!hc[ C[ci] ]){
                  hc[ C[ci] ] = 1;
                  count_c++;
              }
              ci++;
          }
          count += count_c * count_a;
          hb[ B[bi] ] = 1
      }
      bi++;
  }
  return count;
}
