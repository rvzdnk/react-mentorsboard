import CookieConsent from "react-cookie-consent";

const Cookie = () => {
	return (
		<>
			<CookieConsent
				cookieName="cookies"
				style={{
					background: "#9d9d9d",
					textAlign: "center",
					justifyContent: "center",
				}}
				buttonStyle={{
					border: "2px solid #9d9d9d",
					borderRadius: "6px",
					outline: "none",
					background: "#000",
					padding: "6px",
					color: "#fff",
					fontSize: "1em",
				}}
				expires={365}>
				This website uses cookies to enhance the user experience.{" "}
			</CookieConsent>
		</>
	);
};

export default Cookie;