namespace randomPoem {
    let person: string[] = ["Anakin", "Yoda", "Obiwan"];
    let action: string[] = ["loves", "hates", "needs"];
    let objects: string[] = ["sand", "school", "bluemilk"];

    console.log(getVerse(person, action, objects));

    function getVerse(_person: string[], _action: string[], _objects: string[]): string {
        let randomPerson: number = Math.floor(Math.random() * _person.length);
        let randomAction: number = Math.floor(Math.random() * _action.length);
        let randomObjects: number = Math.floor(Math.random() * _objects.length);

        let verse: string = _person[randomPerson] + " " + _action[randomAction] + " " + _objects[randomObjects];
        return verse;
    }

}

