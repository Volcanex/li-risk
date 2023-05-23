import { createBoard } from '@wixc3/react-board';
import LinkButton from '../../../components/link-button/link-button';
import { BrowserRouter as Router } from 'react-router-dom';

export default createBoard({
  name: 'LinkButton',
  Board: () => (
    <Router>
      <LinkButton
        to="/some-path"
        isActive={true}
        label="Click me"
        handleClick={() => {
          // handle click logic here
        }}
      />
    </Router>
  ),
  // rest of the board configuration
});
