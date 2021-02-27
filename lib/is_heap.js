// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array = [null], idx=1) {
  if (array[idx] === undefined) return true;

  let leftIdx = idx * 2;
  let rightIdx = idx * 2 + 1;
  let lefty = array[leftIdx];
  
  if (lefty === undefined) {
    lefty = -Infinity;
  }
  
  let righty = array[rightIdx];

  if (righty === undefined) {
    righty = -Infinity;
  }
  
  let parent = array[idx];

  return parent > lefty && parent > righty && isMaxHeap(array, leftIdx) && isMaxHeap(array, rightIdx);
}


module.exports = {
  isMaxHeap
};
