const Node = (color, id) => ({
  color,
  id
})

export const redHangar = new Node('red', 'redHome')
export const yellowHangar = new Node('yellow', 'yellowHome')
export const blueHangar = new Node('blue', 'blueHome')
export const greenHangar = new Node('green', 'greenHome')

const boardSpace1 = new Node('red', 1)
const boardSpace2 = new Node('yellow', 2)
const boardSpace3 = new Node('blue', 3)
const boardSpace4 = new Node('green', 4)
const boardSpace5 = new Node('red', 5)
const boardSpace6 = new Node('yellow', 6)
const boardSpace7 = new Node('blue', 7)
const boardSpace8 = new Node('green', 8)
const boardSpace9 = new Node('red', 9)
const boardSpace10 = new Node('yellow', 10)
const boardSpace11 = new Node('blue', 11)
const boardSpace12 = new Node('green', 12)
const boardSpace13 = new Node('red', 13)
const boardSpace14 = new Node('yellow', 14)
const boardSpace15 = new Node('blue', 15)
const boardSpace16 = new Node('green', 16)
const boardSpace17 = new Node('red', 17)
const boardSpace18 = new Node('yellow', 18)
const boardSpace19 = new Node('blue', 19)
const boardSpace20 = new Node('green', 20)

boardSpace1.next = boardSpace2
boardSpace2.next = boardSpace3
boardSpace3.next = boardSpace4
boardSpace4.next = boardSpace5
boardSpace5.next = boardSpace6
boardSpace6.next = boardSpace7
boardSpace7.next = boardSpace8
boardSpace8.next = boardSpace9
boardSpace9.next = boardSpace10
boardSpace10.next = boardSpace11
boardSpace11.next = boardSpace12
boardSpace12.next = boardSpace13
boardSpace13.next = boardSpace14
boardSpace14.next = boardSpace15
boardSpace15.next = boardSpace16
boardSpace16.next = boardSpace17
boardSpace17.next = boardSpace18
boardSpace18.next = boardSpace19
boardSpace19.next = boardSpace20
boardSpace20.next = boardSpace1

boardSpace1.jump = boardSpace5
boardSpace2.jump = boardSpace6
boardSpace3.jump = boardSpace7
boardSpace4.jump = boardSpace8
boardSpace5.jump = boardSpace9
boardSpace6.jump = boardSpace10
boardSpace7.jump = boardSpace11
boardSpace8.jump = boardSpace12
boardSpace9.jump = boardSpace13
boardSpace10.jump = boardSpace14
boardSpace11.jump = boardSpace15
boardSpace12.jump = boardSpace16
boardSpace13.jump = boardSpace17
boardSpace14.jump = boardSpace18
boardSpace15.jump = boardSpace19
boardSpace16.jump = boardSpace20
boardSpace17.jump = boardSpace1
boardSpace18.jump = boardSpace2
boardSpace19.jump = boardSpace3
boardSpace20.jump = boardSpace4  

redHangar.next = boardSpace1
yellowHangar.next = boardSpace6
blueHangar.next = boardSpace11
greenHangar.next = boardSpace16

boardSpace17.home = true
boardSpace12.home = true
boardSpace7.home = true
boardSpace2.home = true