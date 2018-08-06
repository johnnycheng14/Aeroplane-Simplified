const Node = color => ({
  color
})

export const redHangar = new Node('red')
export const yellowHangar = new Node('yellow')
export const blueHangar = new Node('blue')
export const greenHangar = new Node('green')

const boardSpace1 = new Node('red')
const boardSpace2 = new Node('yellow')
const boardSpace3 = new Node('blue')
const boardSpace4 = new Node('green')
const boardSpace5 = new Node('red')
const boardSpace6 = new Node('yellow')
const boardSpace7 = new Node('blue')
const boardSpace8 = new Node('green')
const boardSpace9 = new Node('red')
const boardSpace10 = new Node('yellow')
const boardSpace11 = new Node('blue')
const boardSpace12 = new Node('green')
const boardSpace13 = new Node('red')
const boardSpace14 = new Node('yellow')
const boardSpace15 = new Node('blue')
const boardSpace16 = new Node('green')
const boardSpace17 = new Node('red')
const boardSpace18 = new Node('yellow')
const boardSpace19 = new Node('blue')
const boardSpace20 = new Node('green')

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