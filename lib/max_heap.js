class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    if (idx > 1) {
      return Math.floor(idx / 2);
    }
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val)
    this.siftUp(this.array.indexOf(val))
    console.log(this.array);
  }

  siftDown(idx) {
    let arr = this.array;
    let parent = arr[idx];
    let leftChildIdx = idx * 2;
    let rightChildIdx = idx * 2 + 1; 
    let leftChild = arr[leftChildIdx];
    let rightChild = arr[rightChildIdx];

    if (leftChild === undefined) leftChild = -Infinity;
    if (rightChild === undefined) rightChild = -Infinity;
    if (parent > leftChild && parent > rightChild) return;

    let swapIdx;
    if (leftChild > rightChild) swapIdx = leftChildIdx;
    else swapIdx = rightChildIdx;
    [arr[swapIdx], arr[idx]] = [arr[idx], arr[swapIdx]];
    this.siftDown(swapIdx);
  }

  deleteMax() {
    let max = this.array[1];
    if (this.array.length === 1) return null;
    if(this.array.length < 3) return this.array.pop();
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }
}

module.exports = {
  MaxHeap
};
