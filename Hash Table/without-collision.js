class HashTable {
    constructor() {
        this.table = new Array(200);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for(let char of key) {
            hash += char.charCodeAt(0);
        }
        
        return hash % this.table.length;
    }

    set(key,value) {
        const index = this._hash(key);
        this.table[index] = [key,value];
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this._hash(key);

        if(this.table[index] && this.table.length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        }else{
            return false;
        }
    }

}
const a = new HashTable();
a.set('Spain',110);
a.set('ǻ',192);
console.log(a.get('ǻ'));



class HashTable {
    constructor(){
        this.table = new Array(100);
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    _hash(key) {
        let hash = 0;
        for(let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.table.length;
    }

    set(key,value) {
        const index = this._hash(key);

        if(this.table[index]) {
            for(let i=0;i<this.table[index].length;i++) {
                if(this.table[index][i][0] == key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }

            this.table[index].push([key,value]);
            this.size++;
        }else {
            this.table[index] = [];
            this.table[index].push([key,value]);
            this.size++;
        }

    }

    get(key) {
        const index = this._hash(key);

        if(this.table[index]) {
            for(let i=0;i<this.table[index].length;i++) {
                if(this.table[index][i][0] == key) {
                    return this.table[index][i][1];
                }
            }
            return undefined;
        }

        return undefined;
    }

    remove(key) {
        const index = this._hash(key);

        if(this.table[index]) {
            for(let i=0;i<this.table[index].length;i++) {
                if(this.table[index][i][0] == key) {
                    this.table[index].splice(i,1);
                    return true;
                }
            }
            return false;
        }

        return false;
    }
}

const ht = new HashTable()
ht.set('name','salim');
ht.set('age',18);
ht.set('place','kochi');
ht.set('name','aslam')
ht.remove('name')
console.log(ht.get('name'));
<<<<<<< HEAD




console.log('completed_________________________________________________________________________________________________________');
=======
>>>>>>> 4faf37f33a2f8517f46d3854a0d1354a60d5c3e6
