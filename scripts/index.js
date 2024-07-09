function encode() {
    let string = document.querySelector(".inputTexto").value
    let frase = string.split('');
    frase = frase.map(letra => {
      switch(letra) {
        case 'e':
          letra = 'enter'
          break;
        case 'i':
          letra = 'imes'
          break
        case 'a':
          letra = 'ai'
          break;
        case 'o':
          letra = 'ober'
          break;
        case 'u':
          letra = 'ufat'
          break;
      }
      return letra
    }).join('');
    const imagen = document.getElementById('imagen')
    const texto = document.getElementById('sin_texto')
    imagen.remove()
    texto.remove()
    const parrafo = document.getElementById('parrafo')
    parrafo.innerHTML = frase
  }
  
  function decode() {
    let string = document.querySelector(".inputTexto").value
    let desencriptada = string.split(' ')
    desencriptada = desencriptada.map(f => {
      if(f.includes('ufat'))
        f = f.replace('ufat', 'u')
      if(f.includes('ober'))
        f = f.replace('ober', 'o')
      if(f.includes('ai'))
        f = f.replace('ai', 'a')
      if(f.includes('imes'))
        f = f.replace('imes', 'i')
      if(f.includes('enter'))
        f = f.replace('enter', 'e')
      return f
    }).join(' ')

    const parrafo = document.getElementById('parrafo')
    parrafo.innerHTML = desencriptada
    // return desencriptada
  }

  