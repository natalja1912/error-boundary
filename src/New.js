import { useContext } from 'react';
import UserContext from './UserContext';

const New = () => {
    return (
        <UserContext.Consumer>
            {value => (
                        <div>
                        NEW 
                        {value}
                    </div>
            )}
        </UserContext.Consumer>
    )
}

export default New;