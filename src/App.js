import './App.css';

function App() {
  const imageList = new Array(164).fill('');

  const levelList = [0, 29, 56, 83, 109, 136];

  const levelName = ['火系', '水系', '电系', '毒虫', '草系', '格斗'];

  return (
    
    <div className="App">
      <h1>Pikaster 技能介绍（中文）</h1>
      <div className="content">
        {imageList.map((image, index) => {
          return (
            <>
              {levelList.includes(index) && (
                <div class="level-content">
                  <div>{levelName.shift()}</div>
                </div>
              )}
              <img
                src={`/images/pasted image 0(${index}).png`}
                alt="pikaster-skill"
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
