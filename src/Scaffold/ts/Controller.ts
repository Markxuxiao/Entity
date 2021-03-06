
class Controller extends Entity.UniqueItem {
    blade: string
    nameSpace: string
    path: string
    middleware = new Entity.UniqueList<Middleware>(Middleware)

    constructor(name: string) {
        super(name)
        this.blade = lowerCapital(this.name)
        this.name = snake2camel(upperCapital(this.name)) + 'Controller'
    }

}
