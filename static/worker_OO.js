

function pNums(n) {
  var store  = [], i, j, primes = [];
  for (let i = 2; i <= n; ++i) {
    if (!store [i]) {
      primes.push(i);
      for (j = i << 1; j <= n; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
}

function small (primes, v) {
  return primes.slice(0, primes.indexOf(primes.find(e => e > v)));
};

function primeNums (x) {
    return pNums(x);
};

function pfactors (prms, n) {
  var ar = [];
    prms.map(p => {
      while (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  return ar;
}

var   sortFactors = ar => ar.sort(function(x,y) {
  return (x - y);
});

var g = x => {
  var primes = primeNums(x);
  return pfactors(primes,x);
}

onmessage = function(m) {
  var a = m.data;    
  let xx = [a, g(a)];
  console.log("worker OO duck", a,  xx)
  console.log(`worker_OO is now posting ${xx}.`);
  postMessage(xx);
} 
