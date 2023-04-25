import { LogoWrapper, LogoMain, LogoText} from "./Logo.styled"
import AnimatedTextCharacter from "../../../utils/animatedTextCharacter";

const Logo = () => {
    return(
        <LogoWrapper>
            <LogoMain whileHover={{
                scale: [1.1],
                rotate: [0, 90, 180, 270, 360],
                borderColor: [
                    "rgb(199, 210, 254)",
                    "rgb(254, 202, 202)",
                    "rgb(254, 249, 195)",
                    "rgb(254, 249, 195)",
                    "rgb(254, 249, 220)",
                    "rgb(255,255,255)"]
             }}>
                <AnimatedTextCharacter>
                    M
                </AnimatedTextCharacter>
            </LogoMain>
            <LogoText>
                <AnimatedTextCharacter>
                    entorsboard
                </AnimatedTextCharacter>
            </LogoText>
        </LogoWrapper>
    );
};

export default Logo;