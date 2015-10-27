const StatelessComponentNoBlock = () => <div />;

const StatelessComponentBlock = () => {
  return <div />;
};

const StatelessComponentBlockNoReturn = () => {
  <div />;
};

const StatelessComponentProps = (props) => <div {...props} />;

const StatelessComponentDestrucProps = ({ foo }) => <div foo={foo} />;

const StatelessWithContext = () => <div />;

Stateless.contextTypes = {
  foo: PropTypes.string
};