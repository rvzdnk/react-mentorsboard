import { useSelector } from 'react-redux';
import {Title, Hello, Subtitle, WelcomeWrapper, UserNameWrapper} from './Welcome.styled'
import AnimatedTextCharacter from '../../../utils/animatedTextCharacter';

const Welcome =() => {
    const user = useSelector((state) => state.user);
    const userName = user.name;
    const userRole = user.role;
    const isLoggedIn = user.email;

    return(
        <WelcomeWrapper>
            {isLoggedIn ?
                <Title>
                    <Hello>
                        <AnimatedTextCharacter>
                            Hello
                        </AnimatedTextCharacter>
                        <UserNameWrapper>
                            <AnimatedTextCharacter>
                                {userName}
                            </AnimatedTextCharacter>
                            <AnimatedTextCharacter>
                                ,
                            </AnimatedTextCharacter>
                        </UserNameWrapper>
                    </Hello>
                        <AnimatedTextCharacter>
                             welcome to Mentorsboard!
                        </AnimatedTextCharacter>
                </Title>
            :
            <Title>
                <Hello>
                    <AnimatedTextCharacter>
                        Hello,
                    </AnimatedTextCharacter>
                </Hello>
                <AnimatedTextCharacter>
                    welcome to Mentorsboard!
                </AnimatedTextCharacter>
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
        </WelcomeWrapper>
    );
};

export default Welcome;