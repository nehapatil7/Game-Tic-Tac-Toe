
function Game() {
    return (
        <div className='conatiner'>
        <div className="App">  
        <div className='game-board'>
        <div className='play-icons'>
        <div className='icons'> 
        
        </div>
        <div className='turn'> 
        <p>TURN</p>
        </div>
        <div className='refresh'> 
        
        </div>
        </div>

        <div className='play'>
        <div className='row1'>
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>

        <div className='row2'>
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>

        <div className='row3'>
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        </div>
        <div className='score'>
        <div className='user'> 
          <p>X (YOU)</p>
          <p className='zero'>0</p>
        </div>
        <div className='tie'> 
          <p>TIES</p>
          <p className='zero'>0</p>
        </div>
        <div className='cpu'> 
           <p>O (CPU)</p>
           <p className='zero'>0</p>
        </div>
        </div>

      </div>   

    </div>
  
    </div>
  );
}

export default Game;
