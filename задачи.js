function задача1(){
   const u = $('#u').val();
   const d = $('#d').val();
   const e = $('#e').val();
   const e0 = 8.85 * Math.pow(10,-12);
   let w = e0*e*Math.pow(u,2)/(2*Math.pow(d,2));
   alert("Result is = " + w + " Дж/м3");
}