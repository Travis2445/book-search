import { gql } from '@apollo/client';


// LOGIN_USER executes loginUser 
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;


// ADD_USER executes addUser mutation
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// SAVE_BOOK executes saveBook mutation
export const SAVE_BOOK = gql`
    mutation saveBook($bookData: String) {
        saveBook(bookId: $bookData) {
            _id
            username
            email
            savedBook {
                bookId
                title
                image
                description
                authors
                link
            }
        }
    }
`;


//REMOVE_BOOK  executes remove book mutation
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks {
                bookId
                title
                authors
                link
            }
        }
    }
`;