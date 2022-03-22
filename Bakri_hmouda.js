
//1===========exercise one===> get properties


testObject = { Bakri: undefined, Anass: undefined, Badih: 3 };
testArray = [1, 2, 3];

const getProperties = (object) => {

    if ((typeof object) != "object") return console.log('argument is not an object');

    const array = []

    for (const objectItem in object) {
        array.push(objectItem)
    }
    console.log(array);
    return array

};

// getProperties(testObject);
//=========================================


//2===========exercise two===> is plain object

const isPlainObject = (object) => {

    if (!object) return console.log('no argument was inputted')

    const isArray = Array.isArray(object);
    const isObject = typeof object === 'object'
    const isEmpty = Object.keys(object).length === 0

    if (isArray) return console.log(false);
    if (!isEmpty && isObject) return console.log(true);

    return console.log(false)
};

// isPlainObject(testObject);
//=========================================



//3===========exercise three===> modify object

// const modify = () = {}
//=========================================



//4===========exercise four===> makePairs

const makePairs = (object) => {

    if (!object) return console.log('no argument was inputted')

    const isArray = Array.isArray(object);
    const isObject = typeof object === 'object'
    if (isArray || !isObject) return console.log('argument is not an object')

    const array = []

    for (const key in object) {
        const keyValue = key
        const value = object[key]

        array.push([keyValue, value])
    }

    return console.log(array)

}

// makePairs(testObject)
//=========================================


//5===========exercise five===> without

const without = (object, filter) => {

    if (!object) return console.log('no argument was inputted')

    const isArray = Array.isArray(object);
    const isObject = typeof object === 'object'
    if (isArray || !isObject) return console.log('argument is not an object')


    let newObject = {}

    for (const key in object) {
        keyValue = key
        value = object[key]

        if (key != filter) {
            console.log(key)
            newObject = {
                ...newObject, [key]: value
            }
        }
    }


    return console.log(newObject)
}

// without(testObject, "Badih");
//=========================================




//6===========exercise six===> isEmpty

const isEmpty = (object) => {

    if (!object) return console.log('no argument was inputted')

    const isArray = Array.isArray(object);
    const isObject = typeof object === 'object'

    if (isArray || !isObject) return console.log('argument is not an object')

    if (Object.keys(object).length === 0) return console.log(true)

    emptyStatus = true
    for (const key in object) {
        if (object[key] !== undefined) emptyStatus = false
    }

    if (emptyStatus) { return console.log(true) } else { return console.log('not empty') }

}



isEmpty(testObject);
//=========================================