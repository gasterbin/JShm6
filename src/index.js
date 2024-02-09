/**
 * Функція для розрахунку рейтингу переможця після зустрічі з суперником.
 * @param {number} winnerRating - Рейтинг переможця.
 * @param {number} opponentRating - Рейтинг суперника.
 * @returns {number} - Новий рейтинг переможця, округлений до 1-го знака після коми.
 */

function calculateWinnerRating(winnerRating, opponentRating) {
  if (
    winnerRating < 0 ||
    opponentRating < 0 ||
    isNaN(winnerRating) ||
    isNaN(opponentRating)
  ) {
    return NaN;
  }

  if (winnerRating === 0) {
    return opponentRating;
  }

  let ratingDifference = winnerRating - opponentRating;

  if (ratingDifference >= 0 && ratingDifference <= 2) {
    return parseFloat((winnerRating + 2).toFixed(1));
  } else if (ratingDifference > 2 && ratingDifference < 20) {
    return parseFloat((winnerRating + 1).toFixed(1));
  } else if (ratingDifference >= 20) {
    return parseFloat(winnerRating.toFixed(1)); // Не впевнена чи можна просто повернути winnerRating, чи потрібно округяти цю частину
  } else if (ratingDifference < 0) {
    return parseFloat(
      (winnerRating + (opponentRating - winnerRating + 5) / 3).toFixed(1)
    );
  }
}

const winnerRating = 1500;
const opponentRating = 1400;
const newRating = calculateWinnerRating(winnerRating, opponentRating);
console.log(`Новий рейтинг переможця: ${newRating}`);
