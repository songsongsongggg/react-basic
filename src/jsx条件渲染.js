
// 1.三元表达式渲染
// 2.逻辑(&&)渲染

const bel = true;

function App() {
  return (
    <div className="App">
      {bel ? 'song最帅' : '依旧帅'}
      { bel && <h1>靓仔松</h1>  }
    </div>
  );
}

export default App;
