


function areaOfTriangle(length1, length2, length3) {
  s = (length1 + length2 + length3) / 2;
  let area = Math.sqrt(s * (s - length1) * (s - length2) * (s - length3));
  console.log(`The area of triangle is ${area.toFixed(2)}`);
}

areaOfTriangle(5, 6, 7);