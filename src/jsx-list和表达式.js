
const name = '松松靓仔';
const age = () =>{
    return 23;
}
const bel = false;

const songs = [
    { id: 1, name: '痴心绝对' },
    { id: 2, name: '像我这样的人' },
    { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
        {name}
        {age()}
        { bel ? '靓仔一个' : '是的呢'}

        <ul>
            {songs.map(song =>(<li key={song.id}>{song.name}</li>))}
        </ul>
    </div>
  );
}

export default App;
