function findNb(m) {
  function area(n) {
    var area = 0;
    for (i = 0; i < n; i++) {
      area += (n - i) ** 3;
    }
    return area;
  }

  for (j = 0; j < m; j++) {
    if (area(j) > m) {
      console.log(-1);
      return false;
    } else if (area(j) === m) {
      var cubes = j;
      console.log(cubes);
      return cubes;
    }
  }
}

findNb(40539911473216);
