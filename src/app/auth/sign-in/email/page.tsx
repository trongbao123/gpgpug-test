import TextInput from "../../sign-up/_components/TextInput";
import SigninContainer from "../_components/siginContainer";

const Email = () => {
    return (
        <SigninContainer>
            <div className="signin-email">
                <div className="signin-email-content">
                    <TextInput name="email" label="Email address" type="email" placeholder="Email address" />
                    {/* <p>Email address</p>
                    <input type="email" /> */}
                </div>
                <div className="signin-email-content">
                    <TextInput name="password" label="Password" type="password" placeholder="Enter Password" />
                    {/* <p>Email address</p>
                    <input type="email" /> */}
                </div>

                <div className="signin-email-content">
                    <button>Sign in</button>
                </div>
            </div>
        </SigninContainer>
    );
};

export default Email;
