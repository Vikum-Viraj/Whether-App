
/**
 * get color classes for comfort index badges
 * @param {number} 
 * @returns {string}
 */
export const getComfortColor = (index) => {
  if (index >= 85) return 'bg-emerald-100 text-emerald-800 border-emerald-300';
  if (index >= 70) return 'bg-green-100 text-green-800 border-green-300';
  if (index >= 50) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
  if (index >= 30) return 'bg-orange-100 text-orange-800 border-orange-300';

  return 'bg-red-100 text-red-800 border-red-300';
};


/**
 *get color classes for rank badges
 * @param {number}
 * @returns {string}
 */
export const getRankBadgeColor = (rank) => {
  if (rank === 1) return 'bg-gradient-to-br from-yellow-200 to-yellow-400 text-white shadow-lg';
  if (rank === 2) return 'bg-gradient-to-br from-yellow-300 to-yellow-500 text-white shadow-lg';
  if (rank === 3) return 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg';

  return 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md';
};