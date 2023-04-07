//Создаем класс узла двусвязного списка
//next и previous = null, тк оба этих узла не известны в момент создания класса
var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(_value, _next, _previous) {
        if (_next === void 0) { _next = null; }
        if (_previous === void 0) { _previous = null; }
        this.value = _value;
        this.next = _next;
        this.previous = _previous;
    }
    return DoublyLinkedListNode;
}());
// Создаем класс двусвязного списка
//Новый список пуст, поэтому поля head и tail содержат значение null
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(_head, _tail) {
        if (_head === void 0) { _head = null; }
        if (_tail === void 0) { _tail = null; }
        this.head = _head;
        this.tail = _tail;
    }
    //Prepend - создаем узел и помещаем его в начало списка
    DoublyLinkedList.prototype.prepend = function (value) {
        // Создаём новый узел, который будет новым head,
        // при создании передаём второй аргумент, который указывает
        // что его "next" будет текущий head,
        // так как новый узел будет стоять перед текущем head.
        var newNode = new DoublyLinkedListNode(value, this.head);
        // Если есть head, то он больше не будет head.
        // Поэтому, его ссылку на предыдущий узел (previous) меняем на новый узел.
        if (this.head) {
            this.head.previous = newNode;
        }
        // Переназначаем head на новый узел
        this.head = newNode;
        // Если ещё нет tail, делаем новый узел tail.
        if (!this.tail) {
            this.tail = newNode;
        }
        // Возвращаем весь список.
        return this;
    };
    //Append принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в конец связного списка
    DoublyLinkedList.prototype.append = function (value) {
        // Создаём новый узел.
        var newNode = new DoublyLinkedListNode(value);
        if (this.tail) {
            // Присоединяем новый узел к концу связного списка.
            this.tail.next = newNode;
        }
        // В новом узле указываем ссылку на предыдущий (previous) элемент на this.tail,
        // так как новый узел будет теперь последним.
        newNode.previous = this.tail;
        // Переназначаем tail на новый узел.
        this.tail = newNode;
        // Если ещё нет head, делаем новый узел head.
        if (!this.head) {
            this.head = newNode;
        }
        return this;
    };
    /*Delete метод принимает значение в качестве аргумента, удаляет все узлы,
    //которые имеют указаное значение и возвращает последний удалённый узел */
    DoublyLinkedList.prototype.delete = function (value) {
        // Если нет head значит список пуст.
        if (!this.head) {
            return null;
        }
        var deletedNode = null;
        var currentNode = this.head;
        // Перебираем все узлы и удаляем их, если их значение равно указанному.
        while (currentNode) {
            if (currentNode.value === value) {
                // Сохраняем значение текущего узла как удаленное.
                deletedNode = currentNode;
                // Если head должен быть удален,
                if (deletedNode === this.head) {
                    // то делаем следующий узел новым head
                    this.head = deletedNode.next;
                    // Меняем в новом head ссылку (previous) на null.
                    if (this.head) {
                        this.head.previous = null;
                    }
                    // Если все узлы в списке имеют одинаковое значение,
                    // которое передается в качестве аргумента,
                    // тогда все узлы будут удалены. Поэтому tail необходимо обновить.
                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                }
                else if (deletedNode === this.tail) {
                    // Если tail должен быть удален, -
                    // меняем tail на предпоследний узел, который станет новым хвостом.
                    this.tail = deletedNode.previous;
                    // Обновляем ссылку next в новом хвосте.
                    this.tail.next = null;
                }
                else {
                    // Если средний узел будет удален, -
                    // сохраняем ссылку на предыдущий элемент,
                    var previousNode = deletedNode.previous;
                    // и сохраняем ссылку на следующий элемент.
                    var nextNode = deletedNode.next;
                    // Меняем ссылки у предыдущего и следующего узлов от удаленного узла,
                    // чтобы они больше не ссылались на удаленный узел.
                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }
            // Перематываем на один узел вперёд.
            currentNode = currentNode.next;
        }
        return deletedNode;
    };
    //DeleteTail - метод, который удаляет последний узел из списка и возвращает его
    DoublyLinkedList.prototype.deleteTail = function () {
        // Если нет tail - список пуст.
        if (!this.tail) {
            return null;
        }
        // Сохраняем значение последнего узла.
        var deletedTail = this.tail;
        // Если у tail есть ссылка на предыдущий узел,
        if (this.tail.previous) {
            // переназначаем tail на предыдущий узел,
            this.tail = this.tail.previous;
            // обновляем ссылку на следующий узел.
            this.tail.next = null;
        }
        else {
            // Если есть tail, но у него нет ссылки на предыдущий узел,
            // значит в списке только один узел и мы его удалили.
            // Поэтому обнуляем всё.
            this.head = null;
            this.tail = null;
        }
        return deletedTail;
    };
    //DeleteHead - метод, который удаляет из списка первый узел и возвращает его.
    DoublyLinkedList.prototype.deleteHead = function () {
        // Если нет head - список пуст.
        if (!this.head) {
            return null;
        }
        // Сохраняем значение первого узла.
        var deletedHead = this.head;
        // Если у head есть ссылка на следующий узел,
        if (this.head.next) {
            // переназначаем head на следующий узел,
            this.head = this.head.next;
            // обновляем ссылку на следующий узел.
            this.head.previous = null;
        }
        else {
            // Если есть head, но у него нет ссылки на следующий узел,
            // значит в списке только один узел и мы его удалили.
            // Поэтому обнуляем всё.
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    };
    //Find метод принимает значение в качестве аргумента, находит первый узел с таким же значением и возвращает его.
    DoublyLinkedList.prototype.find = function (value) {
        // Если нет head - список пуст.
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        // Перебираем все узлы в поиске значения.
        while (currentNode) {
            // Если указано значение, пробуем сравнить его по значению.
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            // Перематываем на один узел вперед.
            currentNode = currentNode.next;
        }
        return null;
    };
    //ToArray - метод создаёт массив из всех узлов и возвращает его
    // Создаём массив из всех узлов. Используем для поиска
    DoublyLinkedList.prototype.toArray = function () {
        var nodes = [];
        var currentNode = this.head;
        // Перебираем все узлы и добавляем в массив.
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        // Возвращаем массив из всех узлов.
        return nodes;
    };
    return DoublyLinkedList;
}());
// конец класса двусвязного списка
