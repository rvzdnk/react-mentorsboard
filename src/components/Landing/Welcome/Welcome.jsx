import {Title, Hello, Subtitle} from './Welcome.styled'

const Welcome =() => {
    return(
        <>
            <Title>
                <Hello>Hello,</Hello>
                welcome to Mentorsboard!
            </Title>
            <Subtitle>
                This is the place where you found your mentor.
            </Subtitle>
        </>
    );
};

export default Welcome;