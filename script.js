var maxArea = function (height) {
  let maxArea = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    // Move the smaller height pointer
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));
