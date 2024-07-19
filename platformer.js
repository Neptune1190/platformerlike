/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: platformer
@author: 
@tags: []
@addedOn: 2024-00-00
*/
const player = "p"
const floor = "f"
setLegend(
  [ player, bitmap`
0202020202020202
2020202020202020
0202020202020202
2020202020202020
0202020202020202
2020202020202020
0202020202020202
2020202020202020
0202020202020202
2020202020202020
0202020202020202
2020202020202020
0202020202020202
2020202020202020
0202020202020202
2020202020202020` ] ,
  [ floor, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111` ]
)

setSolids([ player, floor])

let level = 0
const levels = [
  map`
.....................f
.....................f
.....................f
.....................f
p....................f
fff.fff.fff.fff.fff.ff`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})
const playery = getFirst(player).y
const playerx = getFirst(player).x
onInput("w", () => {
    getFirst(player).y -= 2
    setTimeout(() => getFirst(player).y += 3, 2 ** 32 + 500);
})

onInput("a", () => {
  getFirst(player).x -= 1
})

onInput("d", () => {
  getFirst(player).x += 1
})
afterInput(() => {
    setTimeout(() => getFirst(player).y += 1, 2 ** 32 + 250);
})

