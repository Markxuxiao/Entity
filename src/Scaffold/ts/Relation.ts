
class Relation extends Entity.UniqueItem {
    type: string
    model: string
    pivot: string = ''
    foreignKey: string = ''
    otherKey: string = ''
    
    constructor(name: string, type: string) {
        super(name)
        this.name = lowerCapital(name)
        this.type = type
        this.model = name
    }
    
}
