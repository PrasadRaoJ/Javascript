// Global, Local ,

let amGlobal = "i am global"

if (true) {
  let amLocal = 'i am Local'
  amGlobal = 'superman' // if we change global variable than everywhere it changed..
  console.log(amGlobal);
  console.log(amLocal);

}
// console.log(amLocal);
//it gives an error
// because we declared in loop,i.e Local variable;
console.log(amGlobal);

// to avoid this errors we can use 'var'

var iam ='global'
if (true) {
  var iamlocal = 'Local'
  console.log(iam);

}
console.log(iamlocal); // It doesn't shows any Error..
