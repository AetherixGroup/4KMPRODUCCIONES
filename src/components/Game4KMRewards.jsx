import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Gamepad2, Award, Sparkles, RefreshCw, Trophy } from 'lucide-react';

export const Game4KMRewards = () => {
  const { gameOpen, setGameOpen, addRewardPoints, rewardsPoints } = useApp();
  const canvasRef = useRef(null);

  const [score, setScore] = useState(0);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  if (!gameOpen) return null;

  const initGame = () => {
    setScore(0);
    setPointsEarned(0);
    setGameOver(false);
    setGameStarted(true);
  };

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let currentScore = 0;

    // Grid config
    const GRID_SIZE = 20;
    const COLS = canvas.width / GRID_SIZE;
    const ROWS = canvas.height / GRID_SIZE;

    // Player position (4KM Crew)
    const player = {
      x: 2,
      y: 2,
      color: '#ffd700'
    };

    // Glitch Enemies
    const enemies = [
      { x: 14, y: 3, dx: 1, dy: 0, color: '#ef4444' },
      { x: 3, y: 12, dx: 0, dy: 1, color: '#ec4899' },
      { x: 12, y: 12, dx: -1, dy: 0, color: '#a855f7' }
    ];

    // Collectible Gold Lenses
    let coins = [
      { x: 5, y: 5 }, { x: 8, y: 2 }, { x: 12, y: 6 },
      { x: 4, y: 10 }, { x: 10, y: 12 }, { x: 15, y: 10 },
      { x: 7, y: 14 }, { x: 13, y: 4 }, { x: 2, y: 8 }
    ];

    // Controls
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'w') {
        if (player.y > 0) player.y -= 1;
      } else if (e.key === 'ArrowDown' || e.key === 's') {
        if (player.y < ROWS - 1) player.y += 1;
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        if (player.x > 0) player.x -= 1;
      } else if (e.key === 'ArrowRight' || e.key === 'd') {
        if (player.x < COLS - 1) player.x += 1;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    let tick = 0;

    const gameLoop = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Grid / Studio Floor
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Grid Lines
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j < canvas.height; j += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      // Draw Gold Lenses (Coins)
      coins.forEach((coin) => {
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(coin.x * GRID_SIZE + GRID_SIZE / 2, coin.y * GRID_SIZE + GRID_SIZE / 2, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.stroke();
      });

      // Move & Draw Glitch Enemies
      if (tick % 15 === 0) {
        enemies.forEach((e) => {
          e.x += e.dx;
          e.y += e.dy;
          if (e.x <= 0 || e.x >= COLS - 1) e.dx *= -1;
          if (e.y <= 0 || e.y >= ROWS - 1) e.dy *= -1;
        });
      }

      enemies.forEach((e) => {
        ctx.fillStyle = e.color;
        ctx.fillRect(e.x * GRID_SIZE + 2, e.y * GRID_SIZE + 2, GRID_SIZE - 4, GRID_SIZE - 4);
      });

      // Check Coin Collection
      coins = coins.filter((coin) => {
        if (coin.x === player.x && coin.y === player.y) {
          currentScore += 100;
          setScore(currentScore);
          return false;
        }
        return true;
      });

      // Draw Player (4KM Cameraman)
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(player.x * GRID_SIZE + GRID_SIZE / 2, player.y * GRID_SIZE + GRID_SIZE / 2, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.fillRect(player.x * GRID_SIZE + 4, player.y * GRID_SIZE + 4, 4, 4); // Camera Lens detail

      // Check Collision with Enemies
      enemies.forEach((e) => {
        if (e.x === player.x && e.y === player.y) {
          const earned = Math.floor(currentScore / 10);
          setPointsEarned(earned);
          addRewardPoints(earned);
          setGameOver(true);
        }
      });

      // Check Victory (All coins collected)
      if (coins.length === 0) {
        const earned = Math.floor(currentScore / 10) + 50; // Bonus
        setPointsEarned(earned);
        addRewardPoints(earned);
        setGameOver(true);
      }

      if (!gameOver) {
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    };

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#0a0a0f] border border-yellow-500/40 rounded-3xl p-6 space-y-6 shadow-[0_0_50px_rgba(212,175,55,0.2)] relative text-center">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-yellow-400" />
            <h3 className="font-cinzel text-xl font-bold text-white">4KM Cyber-Capture (Minijuego)</h3>
          </div>
          <button 
            onClick={() => setGameOpen(false)}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex justify-around items-center bg-slate-900/80 p-3 rounded-2xl border border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 block">PUNTUAJE</span>
            <span className="text-lg font-bold text-yellow-300">{score}</span>
          </div>
          <div>
            <span className="text-slate-400 block">TUS PUNTOS 4KM</span>
            <span className="text-lg font-bold text-gold-gradient">{rewardsPoints} Pts</span>
          </div>
        </div>

        {!gameStarted ? (
          <div className="py-8 space-y-6">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto animate-bounce" />
            <div className="space-y-2">
              <h4 className="font-cinzel text-xl font-bold text-white">¡CAPTURA LENTES DE ORO Y GANA DESCUENTOS!</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Mueve a tu fotógrafo con las <span className="text-yellow-400 font-bold">Flechas del Teclado / WASD</span>. Recolecta todos los Lentes de Oro evitando los Glitches digitales. ¡Cada punto se suma a tu saldo para canjear cupones!
              </p>
            </div>

            <button 
              onClick={initGame}
              className="btn-gold py-3.5 px-8 text-sm font-bold uppercase tracking-wider"
            >
              ¡INICIAR JUEGO!
            </button>
          </div>
        ) : gameOver ? (
          <div className="py-8 space-y-6">
            <Award className="w-16 h-16 text-yellow-400 mx-auto" />
            <div className="space-y-2">
              <h4 className="font-cinzel text-2xl font-bold text-white">¡JUEGO TERMINADO!</h4>
              <p className="text-sm text-yellow-300 font-bold">
                Puntaje Final: {score} | Ganaste +{pointsEarned} Puntos 4KM Rewards
              </p>
              <p className="text-xs text-slate-400">
                Usa el código de cupón <span className="text-yellow-400 font-bold">PUNTOS50</span> en tu carrito cuando acumules 50 puntos para 15% OFF.
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button 
                onClick={initGame}
                className="btn-gold py-3 px-6 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> VOLVER A JUGAR
              </button>

              <button 
                onClick={() => setGameOpen(false)}
                className="btn-outline-gold py-3 px-6 text-xs font-bold uppercase tracking-wider"
              >
                CERRAR
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <canvas 
              ref={canvasRef} 
              width={340} 
              height={340} 
              className="border-2 border-yellow-500/40 rounded-2xl shadow-inner bg-black"
            />
            <p className="text-[10px] text-slate-400 mt-2">
              Usa las flechas de tu teclado o desliza para moverte.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
