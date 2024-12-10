// ? REMOVE SPECIFIC NODE FORM STACK
class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty(){
        return this.stack.length == 0;
    }

    getSize() {
        return this.stack.length;
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        this.stack.pop();
    }

    display() {
        console.log(this.stack);
    }
    deleteNode(target) {
        let tempStack = []; //? Auxilary array for holding the vlaues except the target.
        while(!this.isEmpty()){
            const item = this.stack.pop();
            if(item !== target) {
                tempStack.push(item);
            }
        }
        while(tempStack.length > 0) {
            this.push(tempStack.pop());
        }
    }
}

const st = new Stack();
st.push(90)
st.push(70)
st.push(50)
st.deleteNode(90)
st.display();