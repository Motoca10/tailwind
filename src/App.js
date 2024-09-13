import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <header className="flex justify-between bg-black p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold">SenaiNews</h1>
        <nav className="flex gap-8">
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Home</a>
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Sobre</a>
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Contato</a>
        </nav>
      </header>

      <main className="mx-4 flex-1">
        <h1 className="mt-8 text-2xl font-black text-slate-800">Principais Notícias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://i.pinimg.com/originals/12/b5/ea/12b5eaf1ff28114033a2d846d36b246f.jpg" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Hala Madrid</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://img.elo7.com.br/product/zoom/2799921/capa-pirulito-real-madrid-5cm.jpg" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Hala Madrid</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://i.pinimg.com/originals/f1/2b/b8/f12bb885f2c8efafc217e7c42ce83197.jpg" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Hala Madrid</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLA3IuN8F3dHq_1BD7PWZqZqMlZD341HQcg&s" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Hala Madrid</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://i.pinimg.com/474x/f2/eb/76/f2eb76e46dc89b5b48774b49d61ee8ec.jpg" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Hala Madrid</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://media.seudinheiro.com/uploads/2022/05/Real-Madrid-jogo-de-apostas-copiar.jpg" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Hala Madrid</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-black text-white text-center p-4 mt-10">
        <h4 className="text-lg">Todos os direitos reservados - 2024</h4>
      </footer>
    </div>

  );
}

export default App ;