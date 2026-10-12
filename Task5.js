let number = 5

for (let i = 1; i <= 10; i++) {
    console.log(number + 'x' + i  + '=' + (number * i))
}

//Example for Continue statement
for (let j = 1; j <= 5; j++) {
    if (j == 3) {
        continue
    }
    console.log(j)
}

//Example for Break statement
for (let k = 1; k <= 5; k++) {
    if (k == 3) {
        break
    }
    console.log(k)
}