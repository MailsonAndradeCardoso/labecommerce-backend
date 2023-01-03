const user = process.argv[2]
const numUser = process.argv[3]

if(!user){
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      const numeroAleatorioEntreZeroeDez = getRndInteger(0, 10)
      console.log("comp escolheu impar")
      console.log(`comp escolheu ${numeroAleatorioEntreZeroeDez}`)
      const result = Number(numUser) + Number(numeroAleatorioEntreZeroeDez)
      console.log(`a soma do user é ${result}`)
      result %2 === 0 ? console.log("u win"): console.log("u lose")
      
} else{
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const numeroAleatorioEntreZeroeDez = getRndInteger(0, 10)
console.log("comp escolheu par")
console.log(`comp escolheu ${numeroAleatorioEntreZeroeDez}`)
const result = Number(numUser) + Number(numeroAleatorioEntreZeroeDez)
console.log(`a soma é ${result}`)
result %2 === 1 ? console.log("u win"): console.log("u lose")
}