
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(matrix == undefined)
    return [];
  let i = 0, j, array = [];
  while (i < matrix.length) {
      for (j = 0; j < matrix[i].length; j++)
          array.push(matrix[i][j]);
      if (++i < matrix.length)
          for (j = matrix[i].length-1; j > -1; j--)
              array.push(matrix[i][j])
      else
          break;
      i++;
  }
  return array;
}
