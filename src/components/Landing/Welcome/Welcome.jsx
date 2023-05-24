import { useSelector } from 'react-redux';
import {Title, Hello, Subtitle, WelcomeWrapper, UserNameWrapper} from './Welcome.styled'
import AnimatedTextCharacter from '../../../utils/animatedTextCharacter';

const Welcome =() => {
    const {role} = useSelector(({user}) => user);
    const {name} = useSelector(({user}) => user);
    const {email} = useSelector(({user}) => user);
    const isLoggedIn = email;

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
                                {name}
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
            {role === "Mentor" ?
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