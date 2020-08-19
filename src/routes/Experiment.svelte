<script>

let P = 882;
let Ar = [];
function f (x) { 
        Ar = Ar.concat(P);
        if  (x < 10) {
            P = P + 1
            g(x);
        } 
}
function g (b) {
    b+=1; 
    if (b < 7) setTimeout(() =>  f(b), 800)
};
g(-1);
</script>

<h1>{Ar}</h1>
