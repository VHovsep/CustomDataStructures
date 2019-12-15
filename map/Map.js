class Entry {
    constructor(key, val){
        this.key = key;
        this.val = val;
    }
    getKey() {
        return this.key;
    }
    setKey(key) {
        this.key = key;
    }
    getVal() {
        return this.val;
    }
    setVal(val) {
        this.val = val;
    }
}

class Map {
    constructor() {
        this.capacity = 100;
        this.size = 0;
        this.table = [];
    }
    Maping(hashCode, type) {
        if(type === "put"){
            if (this.size < this.capacity){
                for(let i = 0; i < this.size; i++) {
                    if(this.table[i].getKey() === hashCode){
                        return i;
                    }
                }
                return -1;
            }
        } else if (type === "contains" || type === "remove" || type === "get"){
            for(let i = 0; i <= this.size; i++) {
                if(this.table[i] != null && this.table[i].getKey() === hashCode){
                    return i;
                }
            }
            return -1;
        }
    }
    getSize() {
        // TODO Auto-generated method stub
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    containsKey( key) {
        if(key == null) {
            if(this.table[0].getKey() == null) {
                return true;
            }
        }
        let location = this.Maping(key, "contains");
        if(location === -1) return false;
        let e = this.table[location];
        return e != null && e.getKey() === key;

    }
    containsValue( value) {
        for(let i=0; i < this.table.length; i++) {
            if(this.table[i] != null && this.table[i].getVal() === value) {
                return true;
            }
        }
        return false;
    }
    get(key) {
        let ret = null;
        if(key == null) {
            let e = this.table[0];
            if(e != null) {
                return e.getVal();
            }
        } else {
            let location = this.Maping(key,"get");
            let e = this.table[location];
            if(e!= null && e.getKey() === key) {
                return e.getVal();
            }
        }
        return ret;
    }
    put(key, val) {
        let ret = null;
        if (key == null) {
            ret = this.putForNullKey(val);
            return ret;
        } else {
            if(this.size === 0) {
                this.size++;
                this.table[0] = new Entry(null,null);
            }
            let location = this.Maping(key,"put");
            if(location === -1) {
                let e = new Entry(key, val);
                this.table.push(e);
                this.size++;
            } else {
                return this.table[location].getVal();
            }
        }
        return ret;
    }
    putForNullKey(val) {
        let e = null;
        try {
            e = this.table[0];
        } catch(/*NullPointerException*/ ex) {

        }
        let ret = null;
        if (e != null && e.getKey() == null) {
            ret = e.getVal();
            e.setVal(val);
            return ret;
        } else {
            let eNew = new Entry();
            eNew.setKey(null);
            eNew.setVal(val);
            this.table[0] = eNew;
            this.size++;
        }
        return ret;
    }

    remove(key) {
        let location = this.Maping(key,"remove");
        if(location === -1) return location;
        let ret = null;
        if(this.table[location].getKey() === key) {
            for(let i=location; i<this.table.length;i++) {
                this.table[i] = this.table[i+1];
            }
        }
        return ret;
    }
}

function main() {
    let hashMap = new Map();
    hashMap.put(10, "Apple");
    hashMap.put(1, "Orange");
    hashMap.put(79, "Grape");
    console.log("Val at 79 "+hashMap.get(79));
    console.log("Val at 1 "+hashMap.get(1));
    console.log("Val at 10 "+hashMap.get(10));
    console.log("Val at 2 "+hashMap.get(2));
    hashMap.put(null, "Pear");
    console.log("Val at null "+hashMap.get(null));
    console.log("Hashmap has key at null:"+hashMap.containsKey(null));
    console.log("Hashmap has value at null:"+hashMap.containsValue("Pear"));
    console.log("Size of Map:"+hashMap.getSize());
}

main();
