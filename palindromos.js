function palindrome(str) {
    const lowerStr = str.toLowerCase()
    const splitStr = lowerStr.split("")
    const alphab = "abcdefghijklmnopqrstuvwxyz123456789"
    const finalStr = []
    for (let letter of splitStr){
      if (alphab.includes(letter)){
        finalStr.push(letter)
        
      }
    }
    
    let isPalin = true
    const n = finalStr.length 
    for (let i = 0; i < n; i++){
      if (finalStr[i] != finalStr[n-i-1]){
        isPalin = false
        break
      }
    }
  
    return (isPalin);
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));