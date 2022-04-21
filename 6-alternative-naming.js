// This is an alternative for exporting into modules
// Here I'm creating diferent properties into the module, because remember that module is an object, so you can create different properties in it

module.exports.items = ['item1','item2']

const person = {
    name:'bob',
}

module.exports.singlePerson = person

// At the end if I console log this module It'll return this:
// { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

