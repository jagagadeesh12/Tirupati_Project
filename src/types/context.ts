export interface IAuthContext {
  isSignedIn: boolean;
  setSignIn: (isSignedIn: boolean) => void;
}
