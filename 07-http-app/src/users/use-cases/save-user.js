import { create } from 'underscore';
import { localhostUserToModel } from '../mappers/localhost-user-mapper.js';
import { userModelToLocalhost } from '../mappers/user-to-localhost-mapper.js';
import { User } from '../models/users.js';

/***
 * @param {Like<user>} userLike
 */

export const saveUser = async( userLike ) => {

    const user = new User( userLike );

    if ( !user.firstName || !user.lastName )
        throw 'First&LastName are required';

    const userToSave = userModelToLocalhost( user );
    let userUpdated;

    if ( user.id ) {
        //return await updateUser(userToSave);
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel( userUpdated ) ;
}

/****
 * @param {Like<User>} user
 */
const updateUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL}/users/${ user.id }`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
        
    });

    const updatedUser = await res.json();
    console.log({ updatedUser});

    return updatedUser; 

}

/****
 * @param {Like<User>} user
 */
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
        
    });

    const newUser = await res.json();
    console.log(newUser);

    return newUser; 

}