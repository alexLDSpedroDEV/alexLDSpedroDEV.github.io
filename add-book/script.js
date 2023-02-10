class livro {
    constructor(titulo, autor, codigo){
        this.titulo = titulo;
        this.autor = autor;
        this.codigo = codigo;
    }
}

class main {
    adicionarLivros(livro){
        
        const lista = document.querySelector('#livro')
        const linha = document.createElement('tr')
        linha.innerHTML = `
            
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.codigo}</td>
            <td><a href="" class="delete">X</a></td>
        `
    
        lista.appendChild(linha)
        
        localStorage.setItem(livro.titulo,livro.autor,livro.codigo);
        
    }

    showAlert(messagen, className) {
        const div = document.createElement('div')

        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(messagen))
        const container = document.querySelector('.container')

        const form = document.querySelector('#formBook')

        container.insertBefore(div, form)

        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 3000);
    }

    removerLivro(target) {
        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    limparLista(){
        document.getElementById('titulo').value = '';
        document.getElementById('Autor').value = '';
        document.getElementById('codigo').value = '';
    }
}
document.getElementById('formBook').addEventListener('submit', function(e){
    e.preventDefault()
    const titulo = document.getElementById('titulo').value
    const autor = document.getElementById('Autor').value
    const codigo = document.getElementById('codigo').value

    const boook = new livro(titulo, autor, codigo)
    
    const ui = new main()

    if(titulo === '' || autor === '' || codigo === ''){
        
        ui.showAlert('por favor complete todos os campos', 'error')
    
    } else{
        
        ui.adicionarLivros(boook)
        
        ui.showAlert('Livro adicionado', 'success')

        ui.limparLista()
       

    }
    e.preventDefault()
    
})

document.getElementById('livro').addEventListener('click', function(e){
    e.preventDefault();
    const ui = new main();
    
    ui.removerLivro(e.target)

    ui.showAlert('Livro removido', 'success')

    
})
