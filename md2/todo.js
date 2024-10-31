class Todo {
    static runningId = 1
    constructor(desc){
        this.id = Todo.runningId++
        this.description = desc
    }
    getTodo(){
        return {id:this.id, description:this.description}
    }
    setDescription(newDesc){
        this.description = newDesc
    }   
}

module.exports = Todo