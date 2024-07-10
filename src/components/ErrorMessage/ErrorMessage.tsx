interface IErrorMessage {
  message?: string;
}
const ErrorMessage: React.FC<IErrorMessage> = ({ message = "Whoops, something went wrong!" }) => {
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  };
  
  export default ErrorMessage;