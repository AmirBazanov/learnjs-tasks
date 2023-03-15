let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printList = (list) => {

    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
}

const printReverseList = (list) =>  {

    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}
