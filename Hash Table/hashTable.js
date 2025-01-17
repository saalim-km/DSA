//? SIMPLE HASH-TABLE WITH COLLISSION REOLUTION

class HashTable {
    constructor() {
        this.table = new Array(100);
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
        let index = this._hash(key);

        if(this.table[index]) {
            for(let i=0;i<this.table[index].length;i++) {
                if(this.table[index][i][0] == key) {
                    this.table[index][i][1] = value;
                }
            }

            this.table[index].push([key,value]);
        }else {
            this.table[index] = [];
            this.table[index].push([key,value]);
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
            return -1;
        }

        return -1;
    }

    remove(key) {
        const index = this._hash(key);

        if(this.table[index]) {
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0]==key) {
                    this.table[index].splice(i,1);
                      return true;
                }
            }
            return -1;
        }

        return -1;
    }
}

const ht = new HashTable();
ht.set('name','salim')
ht.set('age','18');
ht.remove('age');
ht.set('name','nigga');
console.log(ht.get('name'));



// ? CHECK FOR DUPLICATES

class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null).map(() => []); 
    }

    _hash(key) {
        const hash = String(key).charCodeAt(0);
        return hash % this.table.length;
    }

    set(key) {
        const index = this._hash(key);
        const bucket = this.table[index];

        if(!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    has(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        return bucket.includes(key);
    }
}

function checkDuplicates(nums) {
    const ht = new HashTable(nums.length);
    for(let i=0;i<nums.length;i++){
        if(ht.has(nums[i])) {
            return true;
        }else{
            ht.set(nums[i]);
        }
    }

    return false;
}

console.log(checkDuplicates([1,1,2,3,4,5]));






//? STUDENT MARK HASH-TABLE

class StudentHashTable {
    constructor() {
        this.table = new Array(10).fill(null).map(()=> []);
    }

    _hash(key) {
        let hash = String(key).charCodeAt(0);
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
        }
        
        this.table[index] = [];
        this.table[index].push([key,value]);
    }

    get(key) {
        const index = this._hash(key);

        if(this.table[index]) {
            for(let i=0; i < this.table[index].length;i++){
                if(this.table[index][i][0] == key) {
                    return this.table[index][i][1];
                }
            }
            return undefined;
        }

        return undefined;
    }

    has(key) {
        const index = this._hash(key);

        if(this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] == key) {
                    return true;
                }
            }
            return false;
        }

        return false;
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
            return undefined;
        }

        return undefined;

    }

}

const ht = new StudentHashTable();
ht.set('Alice','A');
ht.set("Bob", "B");
ht.set("Charlie", "C");
console.log(ht.get('Charlie'));


console.log('completed_________________________________________________________________________________________________________');
