import { useSelector } from 'react-redux';
import {Title, Hello, Subtitle} from './Welcome.styled'

const Welcome =() => {
    const user = useSelector((state) => state.user);
    const userName = user.name;
    const userRole = user.role;
    const isLoggedIn = user.email;

    return(
        <>
            {isLoggedIn ?
                <Title>
                    <Hello>Hello {userName}, </Hello>
                    welcome to Mentorsboard!
                </Title>
            :
            <Title>
                <Hello>Hello,</Hello>
                welcome to Mentorsboard!
            </Title>
            }
            {userRole === "Mentor" ?
            <Subtitle>
                Create your advert and find new students.
            </Subtitle>
            :
            <Subtitle>
                This is the place where you can find your mentor.
            </Subtitle>
            }
        </>
    );
};

export default Welcome;