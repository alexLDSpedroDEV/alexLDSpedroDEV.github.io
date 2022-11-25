const puppeteer = require('puppeteer')
const http = require('http');
const port = 3000

const servidor = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type' : 'text/html'})
  res.write("aprendendo a juntar banco de dados")
  res.end()
})

servidor.listen(port,()=>{console.log("Servidor rodando")})

async function start(name){
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://web.whatsapp.com/')

    //preenchndo a senha e o login
    
}



