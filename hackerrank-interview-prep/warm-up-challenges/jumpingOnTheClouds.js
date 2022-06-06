function jumpingOnTheClouds(c) {

  let n = 0;

  for(let i = 0; i < c.length - 1;) {
    i = i + (c[i + 2] ? 1 : 2);
    n++;
  }

  return n;
}