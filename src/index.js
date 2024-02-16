"use strict";
/**
 * Функція для розрахунку рейтингу переможця після зустрічі з суперником.
 * @param {number} winnerRating - Рейтинг переможця.
 * @param {number} opponentRating - Рейтинг суперника.
 * @returns {number} - Новий рейтинг переможця, округлений до 1-го знака після коми.
 */

function calculateWinnerRating(winnerRating, opponentRating) {
  const ratingDifference = Math.abs(opponentRating - winnerRating);

  if (isNaN(ratingDifference) || winnerRating < 0 || opponentRating < 0) {
    return NaN;
  }

  if (winnerRating < opponentRating) {
    return +(winnerRating + (ratingDifference + 5) / 3).toFixed(1);
  }

  if (ratingDifference <= 2) {
    return +(winnerRating + 2).toFixed(1);
  } else if (ratingDifference < 20) {
    return +(winnerRating + 1).toFixed(1);
  } else {
    return winnerRating;
  }
}

const winnerRating = 50;
const opponentRating = 60;
const newRating = calculateWinnerRating(winnerRating, opponentRating);
console.log(`Новий рейтинг переможця: ${newRating}`);
