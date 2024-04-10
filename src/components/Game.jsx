import React, { useEffect, useState } from 'react';
import '../styles/game.css';

function Game(props) {
  let matrix = [];
  for (var i = 0; i < 3; i++) {
    matrix[i] = [];
    for (var j = 0; j < 3; j++) {
      matrix[i][j] = {
        x: i,
        y: j,
        content: 0,
      };
    }
  }
  
  const [grid, setGrid] = useState(matrix);
  const [turn, setTurn] = useState(true);
  const [reset, setReset] = useState(false);
  const [winer, setWiner] = useState(0);

  const handleRigthClick = (cell) => {
    if (cell.content === 0 && !reset) {
      setGrid(surround(cell, [...grid]));
      setTurn(!turn);
    }
  };
  const surround = (cell, copy) => {
    const lines = [
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    ];
    copy[cell.x][cell.y].content = turn ? 'X' : '◯';

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        copy[a[0]][a[1]].content &&
        copy[a[0]][a[1]].content === copy[b[0]][b[1]].content &&
        copy[a[0]][a[1]].content === copy[c[0]][c[1]].content
      ) {
        setWiner(turn ? 'X' : '◯');
        setReset(true);
      }
    }
    return copy;
  };

  const handleReset = () => {
    let matrix = [];
    for (var i = 0; i < 3; i++) {
      matrix[i] = [];
      for (var j = 0; j < 3; j++) {
        matrix[i][j] = {
          x: i,
          y: j,
          content: 0,
        };
      }
    }
    setGrid(matrix);
    setTurn(true);
    setReset(false);
    setWiner(0);
  };

  useEffect(() => {
    if (!reset) {
      let ban = true;
      for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++) if (grid[i][j].content === 0) ban = false;
      if (ban) {
        alert('It´s a tie');
        setReset(true);
      }
    } else if (winer !== 0) {
      alert((turn ? '◯' : 'X') + ' Win');
    }
  }, [grid, reset, winer, turn]);

  if (props.players === 1) {
    return <div>En proceso</div>;
  }
  if (props.players === 2) {
    return (
      <div className='grid'>
        {grid.map((row, i) => (
          <div key={i}>
            {row.map((col, j) => (
              <div key={j} className='d-inline-flex'>
                <div
                  className='border border-dark'
                  onClick={() => {
                    handleRigthClick(col);
                  }}
                >
                  <p
                    className={
                      col.content === 'X'
                        ? 'eq text-center'
                        : col.content === '◯'
                        ? 'ou text-center'
                        : 'text-center'
                    }
                  >
                    {col.content === 0 ? '‎‎‏‏‎ ‎' : col.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}

        {reset ? (
          <button
            className='btn btn-primary reset'
            onClick={() => handleReset()}
          >
            Reset
          </button>
        ) : (
          <h2 className='turn'>
            Turn of
            <span className={turn ? 'eq' : 'ou'}> {turn ? 'X' : '◯'}</span>
          </h2>
        )}
      </div>
    );
  }
}

export default Game;
