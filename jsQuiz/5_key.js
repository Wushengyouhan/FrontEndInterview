const bird = {
  size: 'small'
}

const mouse = {
  name: 'Mickey',
  small: true
}

try {
  console.log('mouse.bird.size', mouse.bird.size);
} catch (error) {
  console.log('mouse.bird.size', error);
}

console.log('mouse[bird.size]', mouse[bird.size]);
console.log('mouse[bird[\'size\']]', mouse[bird['size']]);
