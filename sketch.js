let nums = [];
for (let i = 0; i < 500; i++) {
	nums[i] = Math.floor(Math.random() * 500);
}
let j = 0;
let k = 1;
function setup() {
  createCanvas(500, 500);
}

function draw() {
	bubbleSortOnce();
	clear();
	for (let i = 0; i < nums.length; i++) {
		line(i, height, i, height - nums[i]);
	}
	
}

function bubbleSortOnce() {
	if (j < nums.length) {
		if (k < nums.length - j) {
			if (nums[k - 1] > nums[k]) {
				swap(k - 1, k);
				k = k + 1;
			} else {
				k++;
			}
		} else {
			j++; 
			k = 1;
		}
	} else {
		noLoop();
	}
}


function swap(a, b) {
	let temp = nums[a];
	nums[a] = nums[b];
	nums[b] = temp;
}