function matchingStrings(strings,queries){
    let arr = []
    for(let x of queries){
        arr.push(strings.filter(s => s===x).length)
    }
    return arr
  }
document.write(matchingStrings(['aba','baba','aba','xzxb'],['aba','xzxb','ab']))