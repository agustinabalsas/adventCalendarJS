function createCube(size) {
    let cube = ""
  
    for (let i = 1; i <= size; i++){
  
      cube += " ".repeat(size-i)
      
      cube += "/\\".repeat(i)
  
      cube += "_"
  
      cube += "\\_".repeat(size-1)
  
      cube += "\\\n"
    }
  
    for (let i = size; i >= 1; i--){
      cube += " ".repeat(size-i)
      
      cube += "\\/".repeat(i)
  
      cube += "_/".repeat(size)
  
      if (i != 1) cube += "\n"
    }
  
    return cube
}

module.exports = createCube;