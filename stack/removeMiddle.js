? REMOVE MIDDLE ELEMENT FORM STACK
class Stack {
    constructor() {
        this.stack = [1,2,3,4,5];
    }

    removeMiddle() {
        let count = 0;
        const tempStack=[];
        const middle = this.getMiddle();

        while(count <= middle) {
            if(count == middle) {
                this.stack.pop();
            }else {
                tempStack.push(this.stack.pop());
            }
            count++;
        }

        while(tempStack.length > 0) {
            this.stack.push(tempStack.pop());
        }
    }

    getMiddle() {
        const size = this.getSize();
        const middle = Math.floor(size / 2);
        return middle;
    }

    getSize() {
        return this.stack.length;
    }

    display() {
        console.log(this.stack.join(' , '));
        
    }
}
const st = new Stack();
console.log(st.getMiddle());
st.removeMiddle();
st.display();
