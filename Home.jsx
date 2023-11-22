
import Game from "./Game"

function Home() {
    return (
        <div className='conatiner'>
        <div className="App">
          <div className='mobile-view'>
          <div className='board'>
              <div className='pick-player'>
                <p>PICK PLAYER</p>
                <div className='select'>
                  <p>X</p>
                  <div className='o'></div>
                </div>
              </div>
              <div className='vs-Pc'>
                <p>NEW GAME (VS CPU)</p>
    
              </div>
              <div className='vs-human'>
                <p>NEW HUMAN (VS CPU) Coming Soon</p>
    
              </div>
              <div className='invite'>
                <p>INVITE FRIEND</p>
              </div>
          </div>
          </div>
          </div>
          <Game />
          </div>

    );
    
}

export default Home;