import { GraphQLServer } from 'graphql-yoga'

//DEMO USER DATA
const users = [{
    id: '1',
    name: 'Andrew',
    email: 'andrew@c.com',
    age: 27
}, {
    id: '2',
    name: 'sarah',
    email: 'sarah@c.com'
}, {
    id: '3',
    name: 'kumar',
    email: 'kumar@c.com',
    age: 29
}]

// Type definitions (schema)
const typeDefs = `
    type Query {
        greeting(name:String,position:String!):String!
        add(a:Float,b:Float):Float!
        me:User!
        post:Post!
        users(query:String):[User]!
    }

    type User {
        id:ID!
        name:String!
        email:String!
        age:Int
    }

    type Post {
        id:ID!
    }
`

// Resolvers
const resolvers = {
    Query: {
        users(parent, args, ctx, info) {
            if (args.query) {
                return users.filter( (user) => {
                    return user.name.toLowerCase().includes(args.query.toLowerCase())

                });
            } else {
                return users;
            }
        },
        add(parent, args, ctx, info) {
            return args.a + args.b;

        },
        greeting(parent, args, ctx, info) {
            if (args.name) {
                return `Hello , ${args.name} ${args.position}`
            } else {
                return 'Hello';
            }
            console.log(args);

        },
        me() {
            return {
                id: '123098',
                name: 'Mike',
                email: 'a@bc.com',
                age: 28
            }
        },
        post() {
            return {

                id: '111'
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})