class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addNodeToTheEnd (value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  };

  insertNodeInPosition (value, position) {
    if (position < 0 || position > this.length) {
      return 'Error: Incorrect value of position';
    }

    const node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = node;
      node.next = current;
    }

    this.length++;
  };

  getNodeByPosition (position) {
    if (position < 0 || position > this.length) {
      return 'Error: Incorrect value of position';
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current.value;
  };

  getIndexOf (value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  };

  /* 2.2
    Реализуйте метод, который удаляет элемент по позиции..
  */

  removeNodeByPosition (position) {
    if (position < 0 || position > this.length) {
      return 'Error: Incorrect value of position';
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while(index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  };

  removeNodeByValue (value) {
    return this.removeNodeByPosition(this.getIndexOf(value));
  };

  /* 2.1
    Реализуйте метод, который удаляет дубликаты из неотсортированного списка.
    Запрещается использвать временный буфер.
  */

  removeDuplicates () {
    let current = this.head;

    while (current) {
      let runner = current;

      while (runner.next) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }

      current = current.next;
    }
  };

  getLength () {
    return this.length;
  };

  isEmpty () {
    return this.length === 0;
  };

  print () {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  };

  /* 2.4
    Реализуйте метод, разбивающий связанный список вокруг значения Х, так чтобы все узлы,
    меньшие Х, оказались перед узлами, большими или равными Х.
  */

  sortAroundValue (x, saveMode) {
    let beforeStart = null;
    let afterStart = null;

    let current = this.head;

    while (current) {
      let next = current.next;

      if (current.value < x) {
        current.next = beforeStart;
        beforeStart = current;
      } else {
        current.next = afterStart;
        afterStart = current;
      }

      current = next;
    }

    if (!beforeStart) {
      return afterStart;
    }

    let head = beforeStart;

    while (beforeStart.next) {
      beforeStart = beforeStart.next;
    }

    beforeStart.next = afterStart;

    if (!saveMode) {
      return head;
    }

    this.head = head;
  };
}

const test = () => {
  const list = [4, 7, 1, 3, 6, 9, 2, 8, 11, 3, 6, 4, 1];
  const linkedList = new LinkedList();

  for (let i = 0; i < list.length; i++) {
    linkedList.addNodeToTheEnd(list[i]);
  }

  linkedList.sortAroundValue(5, true);
  linkedList.print();
};

test();
