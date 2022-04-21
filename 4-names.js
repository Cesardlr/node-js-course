// local
const secret = 'SUPER SECRET'

// global
const john = 'john'
const peter = 'peter'

// If we don't want to share something, like the super secret into the module, we can only export waht we choose to
module.exports = {john, peter}