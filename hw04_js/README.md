# hw04_js


1) Написать класс, реализующий двусвязный список. Предусмотреть методы
поиска, вставки, удаления, изменения элемента и определения длины списка.

Методы для проверки
============================
let list = new DoublyLinkedList()
list.append('node_value1')
list.append('node_value2')
list.append('node_value3')
list.prepend('node_value0')

list.deleteHead()
list.deleteTail()

value = 'node_value1'
list.find(value)
list.delete(value)

длина
let list = new DoublyLinkedList()
myArray = list.toArray()
myArray.length

console.log(list)
===========================

