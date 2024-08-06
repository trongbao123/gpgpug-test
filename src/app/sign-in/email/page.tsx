import SigninContainer from "../_components/siginContainer";

const Email = () => {
    return (
        <SigninContainer>
            <div className="signin-email">
                <div className="signin-email-content">
                    <p>Email address</p>
                    <input type="email" placeholder="Email address" />
                </div>
                <div className="signin-email-content">
                    <p>Password</p>
                    <input type="password" placeholder="Enter password" />
                </div>
                <div className="signin-email-content">
                    <button>Sign in</button>
                </div>
            </div>
        </SigninContainer>
    );
};

export default Email;
